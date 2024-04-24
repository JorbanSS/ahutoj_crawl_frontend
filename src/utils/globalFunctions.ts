import { TimeIntervalType, TimeType } from "@/interfaces/common";

// 转换工具
export class ConvertTools {
  // 时间戳 => 时间
  public static Timestamp2Time(timestamp: number, keepOrigin: boolean = false): TimeType {
    if (timestamp <= 1e10 && keepOrigin == false) timestamp *= 1000;
    let t = new Date(timestamp);
    let time: TimeType = {
      year: t.getFullYear(),
      month: t.getMonth() + 1,
      day: t.getDate(),
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds(),
    };
    return time;
  }

  // 时间间隔 => 时间
  public static TimeInterval2Time(interval: number): TimeIntervalType {
    let time: TimeIntervalType = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
    interval = Math.floor(interval / 1000);
    time.second = interval % 60;
    interval = Math.floor(interval / 60);
    time.minute = interval % 60;
    interval = Math.floor(interval / 60);
    time.hour = interval % 24;
    interval = Math.floor(interval / 24);
    time.day = interval;
    return time;
  }

  // 打印时间
  public static PrintTime(time: TimeType | number, showDate: number = 0, showSecond: number = 0, showWeek: boolean = false): string {
    const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    if (typeof time === "number") time = this.Timestamp2Time(time);
    let ret = '';
    if (showDate == 1) ret += `${time.year}年`;
    if (showDate) ret += `${time.month.toString()}月${time.day.toString()}日 `;
    if (showWeek) ret += `${daysOfWeek[new Date(time.year, time.month - 1, time.day).getDay()]} `;
    ret += `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
    if (showSecond) ret += `:${time.second.toString().padStart(2, '0')}`;
    return ret;
  }

  // 打印时间间隔
  public static PrintTimeInterval(time: TimeIntervalType | number, showSecond: number = 0): string {
    if (typeof time === "number") time = this.TimeInterval2Time(time);
    let ret = '';
    if (time.day) ret += `${time.day.toString()}日 `;
    ret += `${time.hour.toString()}:${time.minute.toString().padStart(2, '0')}`;
    if (showSecond) ret += `:${time.second.toString().padStart(2, '0')}`;
    return ret;
  }

  // 两个时间戳 => 时间间隔
  public static TimeInterval(start: number, end: number): number {
    if (start <= 1e10) start *= 1000;
    if (end <= 1e10) end *= 1000;
    let interval = Math.abs(end - start);
    return interval;
  }

  // 十进制数 => 二十六进制字母
  public static Number2Alpha(num: number): string {
    let alpha = "";
    while (num) {
      alpha = String.fromCharCode((num - 1) % 26 + 65) + alpha;
      num = Math.floor((num - 1) / 26);
    }
    return alpha;
  }

  // 计算百分比，0 为向下取整（默认），1 为向上取整
  public static Percentage(m: number, n: number, isCeil: number = 0): number {
    if (n == 0) return 0;
    if (isCeil) return Math.ceil(m / n * 100);
    return Math.floor(m / n * 100);
  }
}


// 字符串验证工具
export class Validator {
  //验证用户 UID
  public static UID(UID: string): boolean {
    const regex = /^[A-Z]{2,}[0-9]{6,}$/;
    return regex.test(UID);
  }
  
  // 验证密码
  public static Password(password: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\d\W_]{8,20}$/;
    return regex.test(password);
  }

  // 验证用户真实姓名
  public static UserName(name: string): boolean {
    const regex = /^[\u4e00-\u9fa5]{2,10}$/;
    return regex.test(name);
  }

  // 验证邮箱
  public static Email(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // 验证邮箱验证码
  public static VerifyCode(code: string): boolean {
    const regex = /^[a-zA-Z\d]{6}$/;
    return regex.test(code);
  }

  // 验证入学年份
  public static Year(year: string): boolean {
    const regex = /^\d{4}$/;
    return regex.test(year) && Number(year) >= 2000 && Number(year) <= new Date().getFullYear();
  }
}