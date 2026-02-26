import { LuLinkedin } from "react-icons/lu";
import UDEA from "../../../../public/logos_alianzas/udea-horizontal.webp";
import FUDEA from "../../../../public/logos_alianzas/fundacion-universidad-de-antioquia.webp";
import UNAL from "../../../../public/logos_alianzas/UNAL_Aplicación_Medellín.svg";
import AstridF from "../../../../public/img_OurTeam/astrid-franco-gonzalez.webp";
import DanielaA from "../../../../public/img_OurTeam/daniela-arias.webp";
import JesicaC from "../../../../public/img_OurTeam/jesica-cano.webp";
import SamaiderH from "../../../../public/img_OurTeam/samaider-hoyos.webp";
import MateoD from "../../../../public/img_OurTeam/mateo-duque.webp";
import CarolinaP from "../../../../public/img_OurTeam/carolina-perez.webp";
import NathaliaR from "../../../../public/img_OurTeam/nathalia-revelo.webp";
import JhiselH from "../../../../public/img_OurTeam/jhisel-holguin.webp";
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
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
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
        position: "LIDERAZGO",
        name: "Astrid Franco",
        department: "Coordinadora del Área Social",
        description:
          "Lidera el equipo de intervención social, diseñando estrategias de acompañamiento integral para garantizar la permanencia estudiantil.",
        email: "astridfranco@fundacionantivirus.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    cardAreaLead: [
      {
        photo: DanielaA,
        name: "Daniela Arias",
        areaLeader: "Lider de Proceso - Universidad de Antioquia",
        description:
          "Acompaña a los estudiantes de la Universidad de Antioquia en su proceso de adaptación y permanencia universitaria.",
      },
      {
        photo: JesicaC,
        name: "Jesica Cano",
        areaLeader: "Lider de Proceso - Universidad Nacional",
        description:
          "Gestiona el programa de acompañamiento integral para estudiantes de la Universidad Nacional.",
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
        "Acompañamiento integral a estudiantes de educación básica y media para garantizar su permanencia y éxito académico.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
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
        position: "LIDERAZGO",
        name: "Astrid Franco",
        department: "Coordinadora del Área Social",
        description:
          "Lidera el equipo de intervención social, diseñando estrategias de acompañamiento integral para garantizar la permanencia estudiantil.",
        email: "astridfranco@fundacionantivirus.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    cardAreaLead: [
      {
        photo: SamaiderH,
        name: "Samaider Hoyos",
        areaLeader: "Lider FATV - Colegios",
        description:
          "Coordina intervenciones tempranas en instituciones de educación media para prevenir la deserción.",
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
        "Acompañamiento integral a estudiantes de bootcamps para garantizar su desarrollo profesional desde el primer año.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
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
        "Acompañamiento integral a estudiantes de programas de becarios para garantizar su desarrollo profesional",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
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
        position: "LIDERAZGO",
        name: "Astrid Franco",
        department: "Coordinadora del Área Social",
        description:
          "Lidera el equipo de intervención social, diseñando estrategias de acompañamiento integral para garantizar la permanencia estudiantil.",
        email: "astridfranco@fundacionantivirus.org",
        userLinkedin: "astrid-franco-g",
      },
    ],
    cardAreaLead: [
      {
        photo: JhiselH,
        name: "Jhisel Holguin",
        areaLeader: "Lider FATV - Becarios Ver+",
        description:
          "Brinda acompañamiento especializado a beneficiarios del programa de becas Ver+.",
      },
      {
        photo: MateoD,
        name: "Mateo Arias",
        areaLeader: "Lider de Proceso - Becarios Ver+",
        description:
          "Apoya el seguimiento y desarrollo académico de los becarios del programa Ver+.",
      },
      {
        photo: CarolinaP,
        name: "Carolina Pérez",
        areaLeader: "Lider de Proceso - Becarios Fraternidad Medellín",
        description:
          "Lidera el acompañamiento a becarios de la Fraternidad Medellín en su trayectoria educativa.",
      },
      {
        photo: NathaliaR,
        name: "Nathalia Revelo",
        areaLeader: "Lider de Proceso - Becarios Fundación Aurelio Llano",
        description:
          "Gestiona el programa de becarios de la fundación Aurelio Llano.",
      },
    ],
  },
];

export default projectsData;
