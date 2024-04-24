import { Post, Get } from "@/utils/axios/request";

export const _addUser = (data: any) => {
  return Post("admin/user", data);
}