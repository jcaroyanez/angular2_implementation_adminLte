import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _router:Router,private _authServiceService:AuthServiceService){
    /*if(_authServiceService.hasToken()){
      this._router.navigate(['/dashboard']);
    }*/
  }
 
  ngOnInit(){
    
  }
}
