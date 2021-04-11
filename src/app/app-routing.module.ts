import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewsComponent} from "./news/news.component";
import {ArticleComponent} from "./article/article.component";
import {FirstGuard} from "./first.guard";
import {Article2Component} from "./article2/article2.component";
import {Article3Component} from "./article3/article3.component";

const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsComponent},
  {path: 'article', component: ArticleComponent, canActivate: [FirstGuard]},
  {path: 'article2', component: Article2Component, canActivate: [FirstGuard]},
  {path: 'article3', component: Article3Component, canActivate: [FirstGuard]},
  {path: '**', redirectTo: '/news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


