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
    component: () => import("@/views/RecentContests.vue"),
    meta: { title: BaseTitle + "近期比赛" },
  },
  {
    name: "RatingRank",
    path: "/ratingrank",
    component: () => import("@/views/RatingRank.vue"),
    meta: { title: BaseTitle + "评分排行榜" },
  },
  {
    name: "UserManage",
    path: "/usermanage",
    component: () => import("@/views/UserManage.vue"),
    meta: { title: BaseTitle + "用户管理" },
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/views/About.vue"),
    meta: { title: BaseTitle + "关于" },
  },
  {
    name: "Error404",
    path: '/:pathMatch(.*)',
    component: () => import("@/views/Error404.vue"),
    meta: { title: BaseTitle + "404" },
  },
];

export default routes;
