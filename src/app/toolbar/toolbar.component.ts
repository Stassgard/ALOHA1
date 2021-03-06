import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  LogIn() {
  this.authService.LogIn()
  }
  LogOut() {
    this.authService.LogOut()
  }
}
