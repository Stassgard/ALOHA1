import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import { selectNews, areNewsLoaded } from 'src/store/selectors/news.selectors';
import { NewsState } from 'src/store/reducers/news.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  selectNews$ = this.store.select(selectNews);
  areNewsLoaded$ = this.store.select(areNewsLoaded);

  constructor(public newsService: NewsService, private store: Store<NewsState>) {

  }

  ngOnInit(): void {

  }

}
