import {
  Bill,
  Caution,
  Check,
  Close,
  Code,
  Data,
  DocumentFolder,
  HardDisk,
  Info,
  LoadingOne,
  MoreTwo,
  Muscle,
  Peoples,
  RankingList,
  Time,
  Topic,
  Trophy,
  Ranking,
} from "@icon-park/vue-next";

import { type NavItemType } from "@/interfaces/oj";

export const navItems: Array<NavItemType> = [
  { title: "近期比赛", icon: Trophy, to: { name: "RecentContests" } },
  { title: "评分排行榜", icon: Ranking, to: { name: "RatingRank" } },
  { title: "关于", icon: Info, to: { name: "About" } },
];