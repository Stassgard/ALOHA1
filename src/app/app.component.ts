import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewsService} from "./services/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ALOHA';
  

  constructor(private newsService: NewsService) {
   
}

}
