import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../../model/recipe/recipe";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private urlRecipe= 'http://localhost:8080/recipe/'; 
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.urlRecipe,httpOptions);
  }

  public findOne(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(this.urlRecipe+id,httpOptions);
  }

  public create(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.urlRecipe,recipe,httpOptions);
  }

  public update(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.urlRecipe+recipe.id,recipe,httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(this.urlRecipe+id,httpOptions);
  }


}
