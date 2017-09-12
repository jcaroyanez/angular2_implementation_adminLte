import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../../auth-service';
import { Router } from '@angular/router';
/*export class Users{
  id:number;
  users:string;
  nombre:string;
  pass:string;

  constructor(obj?:any){
    this.id = obj &&   obj.id || null;
    this.users = obj &&  obj.users || null;
    this.nombre = obj &&  obj.nombre || null;
    this.pass = obj &&  obj.pass || null;
  }
}*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  
  constructor(private _authServiceService:AuthServiceService,
              private _router:Router){ 
    this._authServiceService.getUser().subscribe((rest) => this.name = rest.nombre);
  }

  ngOnInit() {
  }

  singOut(){
    this._authServiceService.logout();
    this._router.navigate(['/login']);
  }

}
