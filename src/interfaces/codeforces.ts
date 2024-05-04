import { MapNumberNumber, MapStringNumber } from "./common";

export interface CodeforcesSubmissionType {
  tried: number,
  solved: number,
  unsolved: string,
  averageAttempts: number,
  firstAttemptPassedCount: number,
  [item: string]: any,
}

export interface CodeforcesContestType {
  maxUp: number,
  maxDown: number,
  bestRank: number,
  worstRank: number,
  contestCount: number,
  virtualParticipationCount: number,
  [item: string]: any,
}

export interface CodeforcesStatisticsType {
  CodeforcesID: string,
  rating: Array<MapNumberNumber>,
  language: Array<MapStringNumber>,
  tags: Array<MapStringNumber>,
  verdict: Array<MapStringNumber>,
  problemIndex: Array<MapStringNumber>,
  teamMates: string,
  submission: CodeforcesSubmissionType,
  contest: CodeforcesContestType,
  [item: string]: any,
}