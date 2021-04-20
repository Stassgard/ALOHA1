import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  public newsDate: Date = new Date()

  constructor(private http: HttpClient) {}

  // getNews() {
  //   return this.http.get<{title1: string, text1:string, title2: string, text2:string, title3: string, text3:string, placeholderTitle: string, placeholderText:string }[]>('/assets/news.json');
  // }

  getNews() {
    return this.http.get<any[]>('/assets/news.json');
  }

  getNewsAsObs() {
    return of(this.getNews())
  }

}
