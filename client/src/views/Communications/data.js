import UDEA from "../../../public/logos_alianzas/udea-horizontal.webp";
import FUDEA from "../../../public/logos_alianzas/fundacion-universidad-de-antioquia.webp";
import UNAL from "../../../public/logos_alianzas/UNAL_Aplicación_Medellín.svg";
import AstridF from "../../../public/img_OurTeam/astrid-franco-gonzalez.webp";
import DanielaA from "../../../public/img_OurTeam/daniela-arias.webp";
import JesicaC from "../../../public/img_OurTeam/jesica-cano.webp";

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
  }
];

export default projectsData;
