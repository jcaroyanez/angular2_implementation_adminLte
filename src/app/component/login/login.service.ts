import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

  constructor(private _http:Http){}
  
  singIn(users:string , pass:string): Observable<any>{
     let url = `http://localhost:8080/users/singIng/${users}/${pass}`;
     return this._http.get(url).map(response => response.json());    
  } 
}
