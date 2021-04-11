import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-article3',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.scss']
})
export class Article3Component implements OnInit {

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
  }

}
