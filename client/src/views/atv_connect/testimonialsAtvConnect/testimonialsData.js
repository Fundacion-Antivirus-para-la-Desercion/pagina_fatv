import { TESTIMONIAL_GISELA_PATINO as GiselaPatino } from "../../../assets/cloudinaryImages";

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {"large"|"small-left"|"small-right"} key
 * @property {string} testimony
 * @property {string} initial
 * @property {string|null} photo
 * @property {string} role
 * @property {string} university
 */

/** @param {Function} t - i18next translation function */
export function getTestimonials(t) {
  const base = "atvConnect.testimonialsAtvConnect";
  return [
    {
      id: "testimony-one",
      key: "small-left",
      testimony: t(`${base}.testimony_one.description`),
      initial: "E",
      photo: GiselaPatino,
      role: t(`${base}.testimony_one.role`),
      university: t(`${base}.testimony_one.university`),
    },
    {
      id: "testimony-two",
      key: "small-right",
      testimony: t(`${base}.testimony_two.description`),
      initial: "T",
      photo: null,
      role: t(`${base}.testimony_two.role`),
      university: t(`${base}.testimony_two.university`),
    },
    {
      id: "testimony-three",
      key: "small-left",
      testimony: t(`${base}.testimony_three.description`),
      initial: "E",
      photo: null,
      role: t(`${base}.testimony_three.role`),
      university: t(`${base}.testimony_three.university`),
    },
    {
      id: "testimony-four",
      key: "small-right",
      testimony: t(`${base}.testimony_four.description`),
      initial: "E",
      photo: GiselaPatino,
      role: t(`${base}.testimony_four.role`),
      university: t(`${base}.testimony_four.university`),
    },
    {
      id: "testimony-five",
      key: "small-left",
      testimony: t(`${base}.testimony_five.description`),
      initial: "E",
      photo: null,
      role: t(`${base}.testimony_five.role`),
      university: t(`${base}.testimony_five.university`),
    },
    {
      id: "testimony-six",
      key: "small-right",
      testimony: t(`${base}.testimony_six.description`),
      initial: "E",
      photo: null,
      role: t(`${base}.testimony_six.role`),
      university: t(`${base}.testimony_six.university`),
    },
    {
      id: "testimony-seven",
      key: "small-left",
      testimony: t(`${base}.testimony_seven.description`),
      initial: "E",
      photo: null,
      role: t(`${base}.testimony_seven.role`),
      university: t(`${base}.testimony_seven.university`),
    },
    {
      id: "testimony-eight",
      key: "large",
      testimony: t(`${base}.testimony_eight.description`),
      initial: "E",
      photo: GiselaPatino,
      role: t(`${base}.testimony_eight.role`),
      university: t(`${base}.testimony_eight.university`),
    },
  ];
}
