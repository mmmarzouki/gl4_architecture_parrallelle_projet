import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RecipeRated} from "../../model/tmp/recipe-rated";
import {Recipe} from "../../model/recipe/recipe";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratingUrl = 'http://localhost:8080/recipe/rate';

  constructor(private http: HttpClient) { }

  public rate(recipe: Recipe, score: number): Observable<Recipe>{
    const ratedRecipe: RecipeRated = {'recipe':recipe, 'score': score};
    return this.http.post<Recipe>(this.ratingUrl,ratedRecipe,httpOptions);
  }
}
