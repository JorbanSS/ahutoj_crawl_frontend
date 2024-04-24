const BaseTitle = "AHUT OJ | ";

const routes = [
  {
    path: "/",
    redirect: { name: "RecentContests" },
    meta: { title: BaseTitle + "Home" },
  },
  {
    name: "RecentContests",
    path: "/recentcontests",
    component: () => import("@/pages/RecentContests.vue"),
    meta: { title: BaseTitle + "近期比赛" },
  },
  {
    name: "RatingRank",
    path: "/ratingrank",
    component: () => import("@/pages/RatingRank.vue"),
    meta: { title: BaseTitle + "评分排行榜" },
  },
  {
    name: "UserManage",
    path: "/usermanage",
    component: () => import("@/pages/UserManage.vue"),
    meta: { title: BaseTitle + "用户管理" },
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/About.vue"),
    meta: { title: BaseTitle + "关于" },
  },
  {
    name: "Error404",
    path: '/:pathMatch(.*)',
    component: () => import("@/pages/Error404.vue"),
    meta: { title: BaseTitle + "404" },
  },
];

export default routes;
