import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user/user";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlConnection= 'http://localhost:8080/login';
  private urlUser= 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  public login(user:User):Observable<User> {
    return this.http.post<User>(this.urlConnection,user,httpOptions);
  }

  public create(user:User):Observable<User>{
    return this.http.post<User>(this.urlUser,user,httpOptions);
  }

}
