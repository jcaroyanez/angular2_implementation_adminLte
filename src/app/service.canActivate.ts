import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthServiceService } from './auth-service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class isLogged implements CanActivate{
  
  constructor(private _authServiceService:AuthServiceService, private _router:Router){}

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  : Observable<boolean> | Promise<boolean> | boolean{
     if(!this._authServiceService.hasToken()){
         this._router.navigate(['/login']); 
     } 
     return this._authServiceService.hasToken();
  }
}