import { BaseResult } from "./base-result";
import { IIDentifier } from "./../identifier";

export interface Idea extends IIDentifier {
  title: string;
  description: string;
  totalVotes: number;
  userAlreadyVoted: boolean;
  module: string;
  active: boolean;
}
