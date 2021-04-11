import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(public newsService: NewsService) {

  }

  ngOnInit(): void {
  }

}
