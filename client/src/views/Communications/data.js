import UDEA from "../../../public/logos_alianzas/udea-horizontal.webp";
import FUDEA from "../../../public/logos_alianzas/fundacion-universidad-de-antioquia.webp";
import UNAL from "../../../public/logos_alianzas/UNAL_Aplicación_Medellín.svg";
import ManuelaC from "../../../public/img_OurTeam/manuela-correa.webp";
import SantiagoQ from "../../../public/img_OurTeam/santiago-quintero.webp";
import MayerlinG from "../../../public/img_OurTeam/mayerlin-giraldo.webp";
import DaliaB from "../../../public/img_OurTeam/dalia-bedoya.webp";
import JuanaR from "../../../public/img_OurTeam/juana-rueda.webp";


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
        photo: ManuelaC,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_one.alt",
        position:
          "communications.team.leader.position",
        name: "Manuela Correa",
        department:
          "communications.team.leader.department",
        description:
          "communications.team.leader.description",
        email: "coordinacioncomunicaciones@fundacionantivirusparaladesercion.org",
        userLinkedin: "manuela-correa-quintero-206bb9215",
      },
    ],
    spanAreaLeaders: [
      {
        span: "communications.team.span",
      },
    ],
    cardAreaLead: [
      {
        photo: SantiagoQ,
        alt: "communications.projectsAndTeams.leaders.leader_two.alt",
        name: "Santiago Quintero",
        areaLeader:"communications.team.members.member_one.position",
        description:
          "communications.team.members.member_one.description",
      },
      {
        photo: MayerlinG,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_three.alt",
        name: "Mayerlin Gaviria",
        areaLeader:"communications.team.members.member_two.position",
        description:"communications.team.members.member_two.description",
      },
      {
        photo: MayerlinG,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_three.alt",
        name: "Estefanía Gómez",
        areaLeader:
          "communications.team.members.member_three.position",
        description:
          "communications.team.members.member_three.description",
      },
      {
        photo: DaliaB,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_three.alt",
        name: "Dalia Bedoya",
        areaLeader:
          "communications.team.members.member_four.position",
        description:
          "communications.team.members.member_four.description",
      },
      {
        photo: JuanaR,
        alt: "socialIntervention.projectsAndTeams.leaders.leader_three.alt",
        name: "Juana Rueda",
        areaLeader:
          "communications.team.members.member_five.position",
        description:
          "communications.team.members.member_five.description",
      },
    ],
  },
];

export default projectsData;
