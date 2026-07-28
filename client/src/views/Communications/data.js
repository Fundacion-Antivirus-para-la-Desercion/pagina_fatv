import {
  MANUELA_CORREA_IMG as ManuelaC,
  SANTIAGO_QUINTERO_IMG as SantiagoQ,
  MAYERLIN_GIRALDO_IMG as MayerlinG,
  ESTEFANIA_GOMEZ_IMG as EstefaniaG,
  DALIA_BEDOYA_IMG as DaliaB,
  JUANA_RUEDA_IMG as JuanaR,
} from "../../assets/cloudinaryImages.js";


const projectsData = [
  {
    cardProjectLeader: [
      {
        photo: ManuelaC,
        alt: "communications.team.leader.alt",
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
        alt: "communications.team.members.member_one.alt",
        name: "Santiago Quintero",
        areaLeader:"communications.team.members.member_one.position",
        description:
          "communications.team.members.member_one.description",
      },
      {
        photo: MayerlinG,
        alt: "communications.team.members.member_two.alt",
        name: "Mayerlin Gaviria",
        areaLeader:"communications.team.members.member_two.position",
        description:"communications.team.members.member_two.description",
      },
      {
        photo: EstefaniaG,
        alt: "communications.team.members.member_three.alt",
        name: "Estefanía Gómez",
        areaLeader:
          "communications.team.members.member_three.position",
        description:
          "communications.team.members.member_three.description",
      },
      {
        photo: DaliaB,
        alt: "communications.team.members.member_four.alt",
        name: "Dalia Bedoya",
        areaLeader:
          "communications.team.members.member_four.position",
        description:
          "communications.team.members.member_four.description",
      },
      {
        photo: JuanaR,
        alt: "communications.team.members.member_five.alt",
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
