import { IoIosFlash } from "react-icons/io";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { expandableTransition } from "../../../components/motion/constants/Animations.js";
import { useTranslation } from "react-i18next";
import WriteEffect from "../../../components/writeEffect/WriteEffect.jsx";
import SyntaxTypewriter from "../../../components/writeEffect/SyntaxTypewriter.jsx";

const codeLines = [
  [
    { text: "1", className: "text-gray-500 mr-3" },
    { text: "const", className: "text-purple-400" },
    { text: " impacto = " },
    { text: "await", className: "text-purple-400" },
  ],
  [
    { text: "  analizar(datos);" },
  ],
  [
    { text: "2", className: "text-gray-500 mr-3" },
    { text: "dashboard.render(indicadores);" },
  ],
  [
    { text: "3", className: "text-gray-500 mr-3" },
    { text: "await", className: "text-purple-400" },
    { text: " sebu.evaluar(universidad);" },
  ],
  [
    { text: "4", className: "text-gray-500 mr-3" },
    { text: "permanencia" },
    { text: "(estudiante);", className: "text-primary-yellow" },
  ],
];

function CodeCard({ t }) {
  return (
    <div className="bg-dark-blue rounded-2xl p-5 flex flex-col justify-between h-full border border-white/10">
      {/* Terminal header */}
      <div className="border-[0.1px] border-gray-600 rounded-xl p-2">
        <div className="flex items-center gap-2 mb-4 bg-[#1a1f3d] rounded-lg px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-blue-400" />
          <span className="ml-3 text-gray-400 text-xs font-mono">
            {">_"} fundacion_antivirus.ts
          </span>
        </div>

        {/* Code block */}
        <SyntaxTypewriter
          lines={codeLines}
          typingSpeed={55}
          pauseAfterTyping={3000}
          pauseBeforeRestart={800}
          loop
          cursorChar="|"
          cursorClassName="text-primary-yellow"
          containerClassName="font-mono text-sm leading-7 text-gray-300 pl-2"
        />

        {/* Status bar */}
        <div className="flex justify-between items-center mt-6 bg-[#1a1f3d] rounded-lg px-4 py-2">
          <span className="flex items-center gap-2 text-xs text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            running
          </span>
          <span className="text-xs text-gray-400">TypeScript</span>
        </div>
      </div>

      {/* Deploy badge */}
      <div className="mt-6">
        <span className="inline-flex items-center gap-2 bg-primary-yellow text-dark-blue font-bold text-sm px-5 py-2 rounded-xl">
          🚀 Deploy ready
        </span>
      </div>
    </div>
  );
}

function PillarCard({
  icon,
  pillarLabel,
  title,
  description,
  tags,
  illustration,
}) {
  return (
    <div className="bg-dark-blue rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10">
      <div>
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary-yellow/20 text-primary-yellow p-3 rounded-xl text-2xl">
            {icon}
          </div>
          <div>
            <span className="text-gray-400 text-xs font-mono tracking-widest uppercase">
              {pillarLabel}
            </span>
            <h3 className="text-white font-impact text-xl md:text-2xl">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Illustration */}
        {illustration}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs text-gray-300 border border-gray-500 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function BarChartIllustration() {
  const bars = [3, 3, 5, 3, 6, 3, 5, 7, 4, 6, 5, 7, 8];
  return (
    <div className="flex items-end gap-1 h-24 px-2">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-primary-yellow/70 rounded-t-sm"
          style={{ height: `${h * 10}%` }}
        />
      ))}
    </div>
  );
}

function BrowserIllustration() {
  return (
    <div className="bg-[#1a1f3d] rounded-lg overflow-hidden border border-white/10">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="text-gray-400 text-xs font-mono ml-2">
          antivirus.edu.co
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-2 bg-gray-500 rounded w-3/4" />
        <div className="h-2 bg-gray-600 rounded w-1/2" />
        <div className="h-6 bg-primary-yellow/60 rounded w-1/3 mt-2" />
      </div>
    </div>
  );
}

function Mission() {
  const { t } = useTranslation();

  const dataTags = ["PowerBI", "Excel Avanzado", "Python", "SQL"];
  const webTags = ["React", "TypeScript", "Tailwind", "Supabase"];

  return (
    <section className="bg-white shadow-2xl border-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Mission header */}
        <div className="flex gap-6 mb-12 md:mb-16">
          <div className="w-1 rounded-full bg-gradient-to-b from-primary-yellow to-blue-400 shrink-0" />

          <div>
            <span className="inline-flex items-center gap-2 text-primary-yellow text-sm md:text-lg mb-4 font-impact ">
              <IoIosFlash className="text-lg" />
              {t("dataAnalytics.mission.badge")}
            </span>

            <h2 className="font-impact text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-dark-blue">
                {t("dataAnalytics.mission.title")}
              </span>
              <br />
              <span className="text-primary-yellow">
                {t("dataAnalytics.mission.titleHighlight")}
              </span>
            </h2>

            <p className="text-blue-base text-base md:text-lg max-w-2xl leading-relaxed">
              {t("dataAnalytics.mission.paragraph")}
            </p>
          </div>
        </div>
      </div>

      {/* Pillar cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto px-6 md:px-12">
        <motion.div {...expandableTransition({ transition: { delay: 0.3 } })}>
          <CodeCard t={t} />
        </motion.div>

        <motion.div {...expandableTransition({ transition: { delay: 0.5 } })}>
          <PillarCard
            icon={<RiBarChartGroupedLine />}
            pillarLabel={t("dataAnalytics.mission.pillar1.label")}
            title={t("dataAnalytics.mission.pillar1.title")}
            description={t("dataAnalytics.mission.pillar1.description")}
            tags={dataTags}
            illustration={<BarChartIllustration />}
          />
        </motion.div>

        <motion.div {...expandableTransition({ transition: { delay: 0.7 } })}>
          <PillarCard
            icon={<FiGlobe />}
            pillarLabel={t("dataAnalytics.mission.pillar2.label")}
            title={t("dataAnalytics.mission.pillar2.title")}
            description={t("dataAnalytics.mission.pillar2.description")}
            tags={webTags}
            illustration={<BrowserIllustration />}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;
