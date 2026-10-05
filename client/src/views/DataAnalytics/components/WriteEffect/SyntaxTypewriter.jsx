import { useCallback, useEffect, useRef, useState } from "react";

/**
 * SyntaxTypewriter
 *
 * Renders a typewriter effect on structured, syntax-colored code.
 * Each line is an array of tokens: { text, className? }.
 * The component reveals characters one by one while preserving
 * the className (color) of each token.
 *
 * @param {Object[]} lines        - Array of lines; each line is an array of tokens.
 * @param {string}   [lines[][].text]      - Text content of the token.
 * @param {string}   [lines[][].className] - Tailwind/CSS classes for this token.
 * @param {number}   [typingSpeed=60]        - Milliseconds per character.
 * @param {number}   [pauseAfterTyping=3000] - Milliseconds to pause when done typing.
 * @param {number}   [pauseBeforeRestart=800]- Milliseconds to pause before restarting.
 * @param {boolean}  [loop=true]            - Whether to loop after finishing.
 * @param {string}   [cursorChar="|"]       - Character used as the cursor.
 * @param {string}   [cursorClassName=""]   - Extra classes for the cursor span.
 * @param {string}   [containerClassName=""]- Extra classes for the wrapper div.
 */
function SyntaxTypewriter({
  lines = [],
  typingSpeed = 60,
  pauseAfterTyping = 3000,
  pauseBeforeRestart = 800,
  loop = true,
  cursorChar = "|",
  cursorClassName = "",
  containerClassName = "",
}) {
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef(null);

  // Flatten lines into a single array of { text, className } tokens,
  // inserting a newline sentinel between lines.
  const flatTokens = lines.reduce((acc, line, lineIdx) => {
    acc.push(...line);
    if (lineIdx < lines.length - 1) {
      acc.push({ text: "\n", className: "" });
    }
    return acc;
  }, []);

  // Total characters across all tokens.
  const totalChars = flatTokens.reduce((sum, token) => sum + token.text.length, 0);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    clearTimer();

    if (isDone) {
      if (!loop) return;
      timeoutRef.current = setTimeout(() => {
        setCharIndex(0);
        setIsDone(false);
      }, pauseBeforeRestart);
      return () => clearTimer();
    }

    if (charIndex < totalChars) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsDone(true);
      }, pauseAfterTyping);
    }

    return () => clearTimer();
  }, [
    charIndex,
    clearTimer,
    isDone,
    loop,
    pauseAfterTyping,
    pauseBeforeRestart,
    totalChars,
    typingSpeed,
  ]);

  // Build the visible output: walk through flatTokens accumulating chars.
  function renderTokens() {
    let remaining = charIndex;
    const rendered = [];
    let lineBuffer = [];
    let lineKey = 0;
    let tokenKey = 0;
    let cursorInserted = false;

    for (const token of flatTokens) {
      if (remaining <= 0 && !cursorInserted) break;

      if (token.text === "\n") {
        // Flush current line buffer into a <p>
        rendered.push(
          <p key={`line-${lineKey++}`}>{lineBuffer}</p>
        );
        lineBuffer = [];
        if (remaining <= 0) break;
        remaining--;
        continue;
      }

      const charsToShow = Math.min(remaining, token.text.length);
      const visibleText = token.text.slice(0, charsToShow);
      remaining -= charsToShow;

      if (visibleText.length > 0) {
        const isLastVisible = remaining <= 0 && !cursorInserted;

        lineBuffer.push(
          <span key={`token-${tokenKey++}`} className={token.className ?? ""}>
            {visibleText}
            {isLastVisible && (
              <span
                aria-hidden="true"
                className={`inline-block animate-pulse ${cursorClassName}`}
              >
                {cursorChar}
              </span>
            )}
          </span>
        );

        if (isLastVisible) {
          cursorInserted = true;
        }
      }

      if (remaining <= 0) break;
    }

    // Flush any remaining line buffer
    if (lineBuffer.length > 0) {
      rendered.push(<p key={`line-${lineKey}`}>{lineBuffer}</p>);
    }

    return rendered;
  }

  return (
    <div className={containerClassName}>
      {renderTokens()}
    </div>
  );
}

export default SyntaxTypewriter;
