import {
  KAREN_GONZALEZ_IMG as KarenG,
  SEBASTIAN_HERRERA_IMG as SebastianH,
  SEBASTIAN_LOPEZ_IMG as SebastianL,
  LINA_MARIN_IMG as LinaM,
} from "../../assets/cloudinaryImages.js";


const projectsData = [
  {
    cardProjectLeader: [
      {
        photo: KarenG,
        alt: "dataAnalytics.team.leader.alt",
        position:
          "dataAnalytics.team.leader.position",
        name: "Karen González Alarcón",
        department:
          "dataAnalytics.team.leader.department",
        description:
          "dataAnalytics.team.leader.description",
        email: "coordinaciontecnologiaydatos@fundacionantivirusparaladesercion.org",
        userLinkedin: "karengonzalezanalista",
      },
    ],
    spanAreaLeaders: [
      {
        span: "dataAnalytics.team.span",
      },
    ],
    cardAreaLead: [
      {
        photo: SebastianH,
        alt: "dataAnalytics.team.members.member_one.alt",
        name: "Sebastián Herrera",
        areaLeader:"dataAnalytics.team.members.member_one.position",
        description:
          "dataAnalytics.team.members.member_one.description",
      },
      {
        photo: SebastianL,
        alt: "dataAnalytics.team.members.member_two.alt",
        name: "Sebastián López",
        areaLeader:"dataAnalytics.team.members.member_two.position",
        description:"dataAnalytics.team.members.member_two.description",
      },
      {
        photo: LinaM,
        alt: "dataAnalytics.team.members.member_three.alt",
        name: "Lina Marcela Marín",
        areaLeader:
          "dataAnalytics.team.members.member_three.position",
        description:
          "dataAnalytics.team.members.member_three.description",
      },
    ],
  },
];

export default projectsData;
