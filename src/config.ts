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
  { title: "用户管理", icon: Peoples, to: { name: "UserManage" } },
  { title: "关于", icon: Info, to: { name: "About" } },
];

export const recentContestsOriginOptions = [
  { label: "全部平台", value: "All" },
  { label: "Codeforces", value: "Codeforces" },
  { label: "Nowcoder", value: "Nowcoder" },
  { label: "Atcoder", value: "Atcoder" },
  { label: "Luogu", value: "Luogu" },
];

export const ratingRankOriginOptions = [
  { label: "全部平台", value: "All" },
  { label: "Codeforces", value: "Codeforces" },
  { label: "Nowcoder", value: "Nowcoder" },
  { label: "Atcoder", value: "Atcoder" },
  // { label: "Luogu", value: "Luogu" },
];

export const recentContestLabelOptions = [
  { label: "AtCoder Beginner Contest", value: "ABC" },
  { label: "AtCoder Regular Contest", value: "ARC" },
  { label: "(Div. 1)", value: "Div 1" },
  { label: "(Div. 2)", value: "Div 2" },
  { label: "(Div. 1 + Div. 2)", value: "Div 1/2" },
  { label: "(Div. 3)", value: "Div 3" },
  { label: "(Div. 4)", value: "Div 4" },
  { label: "Educational Codeforces Round", value: "EDU" },
  { label: "(Rated for Div. 2)", value: "Div 2" },
  { label: "牛客周赛", value: "牛客周赛" },
  { label: "牛客小白月赛", value: "小白月赛" },
  { label: "牛客练习赛", value: "牛客练习赛" },
  { label: "洛谷基础赛", value: "洛谷基础赛" },
];