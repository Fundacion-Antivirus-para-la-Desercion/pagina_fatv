import KarenG from "../../../public/img_OurTeam/karen-gonzalez-alarcon.webp";
import SebastianH from "../../../public/img_OurTeam/sebastian-herrera.webp";
import SebastianL from "../../../public/img_OurTeam/sebastian-lopez.webp";
import LinaM from "../../../public/img_OurTeam/lina-marcela-marin.webp";


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
