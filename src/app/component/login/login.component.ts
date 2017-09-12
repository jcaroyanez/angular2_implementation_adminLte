import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,AbstractControl,Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthServiceService } from '../../auth-service';
import { Router } from '@angular/router';
function validEmail(control: FormControl): { [s: string]: boolean } {
         if (!control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
         return {isEmail:true};
         }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  users:AbstractControl;
  pass:AbstractControl;
  iserror:boolean;

  public usersT:string;
  public passT:string;


  constructor(fb:FormBuilder,
              private _loginService:LoginService
              ,private _authServiceService:AuthServiceService,
               private _router:Router){
     this.formLogin = fb.group({
       'users':['',Validators.compose([Validators.required,validEmail])],
       'pass':['',Validators.compose([Validators.required,Validators.minLength(8)])]
     });

     this.users = this.formLogin.controls['users'];
     this.pass = this.formLogin.controls['pass'];

   }

  ngOnInit() {
  }

  singIn(value:any): void{
       this.usersT = value.users;
       this.passT = value.pass;
       this._loginService.singIn(this.usersT,this.passT).subscribe(
         result => {
           if(result.status == "ok"){
             this._authServiceService.login(result.data);
             this._router.navigate(['./dashboard']); 
           }else{
             this.iserror = true;
           }

         },error => {
           console.log(<any>error);
         });
  }

}
