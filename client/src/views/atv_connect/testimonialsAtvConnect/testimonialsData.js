import { TESTIMONIAL_GISELA_PATINO as GiselaPatino,
  TESTIMONIAL_ISABELLA_SANCHEZ_MEJIA as IsabellaSanchezMejia,
  TESTIMONIAL_ISABELLA_NAVARRO as IsabellaNavarro,
  TESTIMONIAL_JUAN_CAMILO_TOVAR as JuanCamiloTovar,
  TESTIMONIAL_MATIAS_MAPATA_ROJAS as MatiasMapataRojas,
  TESTIMONIAL_ANGEL_PARRA_ARRETA as AngelParraArreta
 } from "../../../assets/cloudinaryImages";

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
      photo: null,
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
      id: "testimony-four",
      key: "small-right",
      testimony: t(`${base}.testimony_four.description`),
      initial: "E",
      photo: null,
      role: t(`${base}.testimony_four.role`),
      university: t(`${base}.testimony_four.university`),
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
      id: "testimony-eight",
      key: "large",
      testimony: t(`${base}.testimony_eight.description`),
      initial: "G",
      photo: GiselaPatino,
      photoAlt: t(`${base}.testimony_eight.photoAlt`),
      role: t(`${base}.testimony_eight.role`),
      university: t(`${base}.testimony_eight.university`),
    },
    {
      id: "testimony-nine",
      key: "large",
      testimony: t(`${base}.testimony_nine.description`),
      initial: "I",
      photo: IsabellaSanchezMejia,
      photoAlt: t(`${base}.testimony_nine.photoAlt`),
      role: t(`${base}.testimony_nine.role`),
      university: t(`${base}.testimony_nine.university`),
    },
    {
      id: "testimony-ten",
      key: "large",
      testimony: t(`${base}.testimony_ten.description`),
      initial: "J",
      photo: JuanCamiloTovar,
      photoAlt: t(`${base}.testimony_ten.photoAlt`),
      role: t(`${base}.testimony_ten.role`),
      university: t(`${base}.testimony_ten.university`),
    },
    {
      id: "testimony-eleven",
      key: "large",
      testimony: t(`${base}.testimony_eleven.description`),
      initial: "M",
      photo: MatiasMapataRojas,
      photoAlt: t(`${base}.testimony_eleven.photoAlt`),
      role: t(`${base}.testimony_eleven.role`),
      university: t(`${base}.testimony_eleven.university`),
    },
    {
      id: "testimony-twelve",
      key: "small-left",
      testimony: t(`${base}.testimony_twelve.description`),
      initial: "A",
      photo: AngelParraArreta,
      photoAlt: t(`${base}.testimony_twelve.photoAlt`),
      role: t(`${base}.testimony_twelve.role`),
      university: t(`${base}.testimony_twelve.university`),
    },
    {
      id: "testimony-thirteen",
      key: "large",
      testimony: t(`${base}.testimony_thirteen.description`),
      initial: "I",
      photo: IsabellaNavarro,
      photoAlt: t(`${base}.testimony_thirteen.photoAlt`),
      role: t(`${base}.testimony_thirteen.role`),
      university: t(`${base}.testimony_thirteen.university`),
    },
  ];
}
