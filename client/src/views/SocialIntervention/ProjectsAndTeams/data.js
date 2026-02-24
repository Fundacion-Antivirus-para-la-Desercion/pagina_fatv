import { LuLinkedin } from "react-icons/lu";

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
        logo: "../../../../../public/logos_alianzas/udea.webp",
      },
      {
        name: "Universidad nacional de Colombia",
        logo: "../../../../../public/logos_alianzas/UNAL_Aplicación_Medellín.svg",
      },
    ],
    cardLeader: [
      {
        photo : "../../../../../public/img_OurTeam/astrid-franco-gonzalez.webp",
        position: "LIDERAZGO",
        name: "Astrid Franco",
        department: "Coordinadora del Área Social",
        description:"Lidera el equipo de intervención social, diseñando estrategias de acompañamiento integral para garantizar la permanencia estudiantil.",
        email: "astridfranco@fundacionantivirus.org",
        userLinkedin: "astridf",
      },
      {
        photo : "../../../../../public/img_OurTeam/daniela-arias.webp",
        position: "Lider de Proceso - Universidad de Antioquia",
        name: "Daniela Arias",
        department: "Coordinadora del Área Social",
        description:"Acompaña a los estudiantes de la Universidad de Antioquia en su proceso de adaptación y permanencia universitaria.",
        email: "danielarias@fundacionantivirus.org",
        userLinkedin: "danielarias",
      },
      {
        photo : "../../../../../public/img_OurTeam/jesica-cano.webp",
        position: "Lider de Proceso - Universidad Nacional",
        name: "Jesica Cano",
        department: "Coordinadora del Área Social",
        description:"Gestiona el programa de acompañamiento integral para estudiantes de la Universidad Nacional.",
        email: "jesicacano@fundacionantivirus.org",
        userLinkedin: "jesicacano",
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
        logo: "../../../../../public/logos_alianzas/alcaldia-de-Itagui-Antioquia-para-descargar-impuesto-predial.png",
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
        logo: "../../../../../public/logos_alianzas/Logo-codigo-C13_Mesa de trabajo 1.png",
      },
      {
        name: "Misión TIC",
        logo: "../../../../../public/logos_alianzas/mision-tic-2.png",
      },
      {
        name: "Eledé",
        logo: "../../../../../public/logos_alianzas/elede.png",
      },
      {
        name: "Nodo EAFIT",
        logo: "../../../../../public/logos_alianzas/nodo-eafit.webp",
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
        logo: "../../../../../public/logos_alianzas/Logo Aurelio Llano_Mesa de trabajo 1.png",
      },
      {
        name: "Beca Tech Ver+",
        logo: "../../../../../public/logos_alianzas/logo_Beca Tech Negro.png",
      },
      {
        name: "Fundación Fraternidad Medellín",
        logo: "../../../../../public/logos_alianzas/logo-fraternidad.webp",
      },
      {
        name: "Becas Nutresa",
        logo: "../../../../../public/logos_alianzas/becas-nutresa.webp",
      },
    ],
  },
];

export default projectsData;
