import UDEA from "../../../../public/logos_alianzas/udea-horizontal.webp";
import FUDEA from "../../../../public/logos_alianzas/fundacion-universidad-de-antioquia.webp";
import UNAL from "../../../../public/logos_alianzas/UNAL_Aplicación_Medellín.svg";
import {
  ASTRID_FRANCO_IMG as AstridF,
  DANIELA_ARIAS_IMG as DanielaA,
  JESICA_CANO_IMG as JesicaC,
  SAMAIDER_HOYOS_IMG as SamaiderH,
  MATEO_DUQUE_IMG as MateoD,
  CAROLINA_PEREZ_IMG as CarolinaP,
  NATHALIA_REVELO_IMG as NathaliaR,
  JHISEL_HOLGUIN_IMG as JhiselH,
} from "../../../assets/cloudinaryImages.js";
import AlcandiaITG from "../../../../public/logos_alianzas/alcaldia-de-Itagui-Antioquia-para-descargar-impuesto-predial.png";
import CodigoC13 from "../../../../public/logos_alianzas/Logo-codigo-C13_Mesa de trabajo 1.png";
import MisionTIC from "../../../../public/logos_alianzas/mision-tic-2.png";
import Elede from "../../../../public/logos_alianzas/elede.png";
import NodoEAFIT from "../../../../public/logos_alianzas/nodo-eafit.webp";
import AurelioLlano from "../../../../public/logos_alianzas/Logo Aurelio Llano_Mesa de trabajo 1.png";
import BecaTech from "../../../../public/logos_alianzas/logo_Beca Tech Negro.png";
import Fundation from "../../../../public/logos_alianzas/logo-fraternidad.webp";
import BecasNutresa from "../../../../public/logos_alianzas/becas-nutresa.webp";

const projectsData = [
  {
    id: 0,
    icon: "LuGraduationCap",
    name: "socialIntervention.projectsAndTeams.projectsCards.one.title_button",
    card: {
      title: "socialIntervention.projectsAndTeams.projectsCards.one.title",
      icon: "LuGraduationCap",
      description:
        "socialIntervention.projectsAndTeams.projectsCards.one.description",
      stats: [
        {
          value: "13.000+",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.students",
        },
        {
          value: "81%",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.retention",
        },
        {
          value: "2",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.institutions",
        },
      ],
    },
    cardAllies: [
      {
        name: "Universidad de Antioquia",
        logo: UDEA,
      },
      {
        name: "Fundación Universidad de Antioquia",
        logo: FUDEA,
      },
      {
        name: "Universidad Nacional de Colombia",

        logo: UNAL,
      },
    ],
    cardProjectLeader: [
      {
        photo: AstridF,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_one.alt",
        position:
          "socialIntervention.projectsAndTeams.leaders.leader_one.position",
        name: "Astrid Franco",
        department:
          "socialIntervention.projectsAndTeams.leaders.leader_one.department",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_one.description",
        email: "coordinacionsocial@fundacionantivirusparaladesercion.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    spanAreaLeaders: [
      {
        span: "socialIntervention.projectsAndTeams.leaders.spans_subtitle.spanOne",
      },
    ],
    cardAreaLead: [
      {
        photo: DanielaA,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_two.alt",
        name: "Daniela Arias",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_two.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_two.description",
      },
      {
        photo: JesicaC,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_three.alt",
        name: "Jesica Cano",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_three.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_three.description",
      },
    ],
  },
  {
    icon: "FaSchool",
    name: "socialIntervention.projectsAndTeams.projectsCards.two.title_button",
    card: {
      title: "socialIntervention.projectsAndTeams.projectsCards.two.title",
      icon: "FaSchool",
      description:
        "socialIntervention.projectsAndTeams.projectsCards.two.description",
      stats: [
        {
          value: "4.000+",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.students",
        },
        {
          value: "91.14 %",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.higher_education",
        },
        {
          value: "24",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.institutions",
        },
      ],
    },
    cardAllies: [
      {
        name: "alcaldía de Itagüí",
        logo: AlcandiaITG,
      },
    ],
    cardProjectLeader: [
      {
        photo: AstridF,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_one.alt",
        position:
          "socialIntervention.projectsAndTeams.leaders.leader_one.position",
        name: "Astrid Franco",
        department:
          "socialIntervention.projectsAndTeams.leaders.leader_one.department",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_one.description",
        email: "coordinacionsocial@fundacionantivirusparaladesercion.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    spanAreaLeaders: [
      {
        span: "socialIntervention.projectsAndTeams.leaders.spans_subtitle.spanTwo",
      },
    ],
    cardAreaLead: [
      {
        photo: SamaiderH,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_four.alt",
        name: "Samaider Hoyos",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_four.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_four.description",
      },
    ],
  },
  {
    icon: "IoMdCode",
    name: "socialIntervention.projectsAndTeams.projectsCards.three.title_button",
    card: {
      title: "socialIntervention.projectsAndTeams.projectsCards.three.title",
      icon: "IoMdCode",
      description:
        "socialIntervention.projectsAndTeams.projectsCards.three.description",
      stats: [
        {
          value: "6.100+",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.students",
        },
        {
          value: "4",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.institutions",
        },
      ],
    },
    cardAllies: [
      {
        name: "Código C13",
        logo: CodigoC13,
      },
      {
        name: "Misión TIC",
        logo: MisionTIC,
      },
      {
        name: "Eledé",
        logo: Elede,
      },
      {
        name: "Nodo EAFIT",
        logo: NodoEAFIT,
      },
    ],
  },
  {
    icon: "PiMedal",
    name: "socialIntervention.projectsAndTeams.projectsCards.four.title_button",
    card: {
      title: "socialIntervention.projectsAndTeams.projectsCards.four.title",
      icon: "PiMedal",
      description:
        "socialIntervention.projectsAndTeams.projectsCards.four.description",
      stats: [
        {
          value: "1.480+",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.students",
        },
        {
          value: "96,97%",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.retention",
        },
        {
          value: "4",
          label:
            "socialIntervention.projectsAndTeams.projectsCards.label_stats.institutions",
        },
      ],
    },
    cardAllies: [
      {
        name: "Aurelio Llano Posada",
        logo: AurelioLlano,
      },
      {
        name: "Beca Tech Ver+",
        logo: BecaTech,
      },
      {
        name: "Fundación Fraternidad Medellín",
        logo: Fundation,
      },
      {
        name: "Becas Nutresa",
        logo: BecasNutresa,
      },
    ],
    cardProjectLeader: [
      {
        photo: AstridF,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_one.alt",
        position:
          "socialIntervention.projectsAndTeams.leaders.leader_one.position",
        name: "Astrid Franco",
        department:
          "socialIntervention.projectsAndTeams.leaders.leader_one.department",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_one.description",
        email: "coordinacionsocial@fundacionantivirusparaladesercion.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    spanAreaLeaders: [
      {
        span: "socialIntervention.projectsAndTeams.leaders.spans_subtitle.spanFour",
      },
    ],
    cardAreaLead: [
      {
        photo: CarolinaP,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_five.alt",
        name: "Carolina Pérez",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_five.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_five.description",
      },
      {
        photo: NathaliaR,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_six.alt",
        name: "Nathalia Revelo",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_six.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_six.description",
      },
      {
        photo: JhiselH,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_seven.alt",
        name: "Jhisel Holguin",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_seven.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_seven.description",
      },
      {
        photo: MateoD,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_eight.alt",
        name: "Mateo Duque",
        areaLeader:
          "socialIntervention.projectsAndTeams.leaders.leader_eight.areaLeader",
        description:
          "socialIntervention.projectsAndTeams.leaders.leader_eight.description",
      },
    ],
  },
];

export default projectsData;
