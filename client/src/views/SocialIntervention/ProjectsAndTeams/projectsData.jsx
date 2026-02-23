import { FaSchool } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

export const projectsData = [
  {
    id: 0,
    icon: <LuGraduationCap />,
    name: "Universidades",
    card: {
      title: "Universidades",
      icon: <LuGraduationCap />,
      description:
        "Conectamos estudiantes universitarios con oportunidades reales en empresas líderes del sector tecnológico, impulsando su desarrollo profesional desde el primer año.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
      ],
    },
  },
  {
    icon: <FaSchool />,
    name: "Colegios",
    card: {
      title: "Colegios",
      icon: <FaSchool />,
      description:
        "Conectamos estudiantes universitarios con oportunidades reales en empresas líderes del sector tecnológico, impulsando su desarrollo profesional desde el primer año.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
      ],
    },
  },
  {
    icon: <IoMdCode />,
    name: "Bootcamps",
    card: {
      title: "Bootcamps",
      icon: <IoMdCode />,
      description:
        "Conectamos estudiantes universitarios con oportunidades reales en empresas líderes del sector tecnológico, impulsando su desarrollo profesional desde el primer año.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
      ],
    },
  },
  {
    icon: <PiMedal />,
    name: "Programas de Becarios",
    card: {
      title: "Programas de Becarios",
      icon: <PiMedal />,
      description:
        "Conectamos estudiantes universitarios con oportunidades reales en empresas líderes del sector tecnológico, impulsando su desarrollo profesional desde el primer año.",
      stats: [
        { value: "1,200+", label: "Estudiantes" },
        { value: "92%", label: "Permanencia" },
        { value: "12", label: "Instituciones" },
      ],
    },
  },
];
