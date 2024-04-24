import { Get, Put, Post } from "@/utils/axios/request";

// 获取近期所有比赛
export const _getRecentContests = (data: any) => {
  return Get('recentcontests', data);
}

// 重新获取近期比赛
export const _refreshRecentContests = (data: any) => {
  return Put('recentcontests', data);
}