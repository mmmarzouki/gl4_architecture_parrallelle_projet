import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user/user";
import {Observable} from "rxjs";
import {Recipe} from "../../model/recipe/recipe";
import {Quantity} from "../../model/quantity/quantity";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private urlUser= 'http://localhost:8080/recipe/search/user/';
  private urlName= 'http://localhost:8080/recipe/search/name/';
  private urlQuantity= 'http://localhost:8080/recipe/search/ingredients/';

  constructor(private http: HttpClient) { }

  public searchByUser(user: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.urlUser + user, httpOptions);
  }

  public searchByName(name: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.urlName + name, httpOptions);
  }

  public searchByQuantities(quantities: Quantity[]): Observable<Recipe[]> {
    return this.http.post<Recipe[]>(this.urlQuantity, quantities, httpOptions);
  }
}
