import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  log:boolean
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.setLog()
  }
  setLog(){
    this.log=this.authService.isAuthenticat()
  }
}
