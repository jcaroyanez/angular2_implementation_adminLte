import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../auth-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name:string;
  constructor(private _authServiceService:AuthServiceService) {
     this._authServiceService.getUser().subscribe((rest) => this.name = rest.nombre);
   }

  ngOnInit() {
  }

}
