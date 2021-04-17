import { Injectable } from "@angular/core";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoadNews, LoadNewsSuccess } from "../actions/news.actions";
import { NewsService } from "../../app/services/news.service";

@Injectable()
export class NewsEffects {
    loadNews$ = createEffect( () => this.actions$.pipe(
        ofType(LoadNews),
        mergeMap( () => this.newsService.getNews()
        .pipe(
            map( news => {
             return LoadNewsSuccess( { news: news })
            }),
            catchError( () => [])
        ))
    ));


constructor(private actions$: Actions, private newsService: NewsService) {}
}

// on 12 replased getNewsAsObs for getNews
