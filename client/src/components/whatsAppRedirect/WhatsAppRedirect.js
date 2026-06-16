/**
 * 
 * Función que genera una URL de redirección a WhatsApp con un mensaje predefinido y un número de teléfono específico.
 * @param {string} message Mensaje que se desea enviar a través de WhatsApp. Si no se proporciona, se utiliza un mensaje predeterminado.
 * @param {string} whatsAppNumber Número de WhatsApp al que se desea enviar el mensaje. Si no se proporciona, se utiliza un número predeterminado.
 * @returns {string} URL de redirección a WhatsApp con el mensaje y número proporcionados
 * Si no se proporcionan, se utilizan valores predeterminados.
 */
const WhatsAppRedirect = (message, whatsAppNumber) => {
  const defaultMessage =
    "Hola, estoy interesado en los servicios de la página y me gustaría más información.";
  const finalMessage = message ? message : defaultMessage;

  const defaultWhatsAppNumber = "573173831481";
  const finalWhatsAppNumber = whatsAppNumber
    ? whatsAppNumber
    : defaultWhatsAppNumber;

  return `https://wa.me/${finalWhatsAppNumber}?text=${encodeURIComponent(finalMessage)}`;
};

export default WhatsAppRedirect;
