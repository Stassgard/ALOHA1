import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.scss']
})
export class Article2Component implements OnInit {


  constructor(public newsService: NewsService) {

  }

  ngOnInit(): void {
  }

}
