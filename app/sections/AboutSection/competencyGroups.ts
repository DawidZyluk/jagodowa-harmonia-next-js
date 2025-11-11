import { GiHeartOrgan } from "react-icons/gi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LuBrain, LuLeaf, LuStethoscope } from "react-icons/lu";
import { RiRunLine } from "react-icons/ri";
import type { IconType } from "react-icons";

export type Competency = {
  label: string;
  Icon: IconType;
};

export type CompetencyGroup = {
  title: string;
  competencies: Competency[];
};

export const competencyGroups: CompetencyGroup[] = [
  {
    title: "Diagnostyka i analizy",
    competencies: [
      { label: "Analiza wyników badań", Icon: HiOutlineChartBar },
      { label: "Zaburzenia tarczycy", Icon: LuStethoscope },
      { label: "Interpretacja wyników hormonalnych", Icon: GiHeartOrgan },
      { label: "Ocena mikrobioty jelitowej", Icon: LuBrain },
    ],
  },
  {
    title: "Specjalizacje dietetyczne",
    competencies: [
      { label: "Diety Low FODMAP", Icon: LuLeaf },
      { label: "Wsparcie przy IO i PCOS", Icon: GiHeartOrgan },
      { label: "Zaburzenia odżywiania", Icon: LuBrain },
      { label: "Żywienie sportowców", Icon: RiRunLine },
    ],
  },
  {
    title: "Praca z pacjentem",
    competencies: [
      { label: "Psychodietetyka", Icon: LuBrain },
      { label: "Coaching zdrowotny", Icon: HiOutlineChartBar },
      { label: "Budowanie planów długoterminowych", Icon: RiRunLine },
      { label: "Wsparcie emocjonalne", Icon: GiHeartOrgan },
    ],
  },
];

