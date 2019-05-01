import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Recipe} from "../../model/recipe/recipe";
import {Observable} from "rxjs";
import {RecipeComment} from "../../model/tmp/recipe-comment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentingUrl = 'http://localhost:8080/recipe/comment';

  constructor(private http: HttpClient) { }

  public comment(recipe: Recipe, comment: string):Observable<Recipe>{
    const recipeComment: RecipeComment = {'recipe': recipe, 'comment': comment, 'user': JSON.parse(localStorage.getItem('user'))};
    return this.http.post<Recipe>(this.commentingUrl,recipeComment,httpOptions);
  }
}
