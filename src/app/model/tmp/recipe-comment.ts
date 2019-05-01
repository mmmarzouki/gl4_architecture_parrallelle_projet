import {User} from "../user/user";
import {Recipe} from "../recipe/recipe";

export class RecipeComment {
  comment: string;
  user: User;
  recipe: Recipe;
}
