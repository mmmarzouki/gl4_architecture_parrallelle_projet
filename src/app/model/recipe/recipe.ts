import {User} from "../user/user";
import {Quantity} from "../quantity/quantity";
import {MyComment} from "../comment/comment";
import {Step} from "../step/step";

export class Recipe {
  id: number;
  name: string;
  numVotes: number;
  score: number;
  user: User;
  quantities: Quantity[];
  comments: MyComment[];
  img: string;
  steps: Step[];

}
