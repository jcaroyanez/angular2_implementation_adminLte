import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthServiceService {
  
  isLogin = new BehaviorSubject<boolean>(this.hasToken());
  getItem = new BehaviorSubject<any>([]);
  
  constructor(private _localStorage:LocalStorageService){
     this.getItem.next( this._localStorage.get('user')); 
  }
  login(user:any):void{
     this._localStorage.set('user',user);
     this.getItem.next(user);
     this.isLogin.next(true);
  }

  logout():void{
       this._localStorage.remove('user');
      this.isLogin.next(false);
      this.getItem.next([]);
  }

  hasToken():boolean{
      return !! this._localStorage.get('user');
  }

  isLoginIn():Observable<boolean>{
      return this.isLogin.asObservable();
  }

  prueba():any{
      return  this._localStorage.get('user'); 
  }

  getUser():Observable<any>{
      return this.getItem.asObservable();
  } 
}