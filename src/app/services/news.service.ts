import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  public title1 = 'Университетский мобильный оператор появится в Томске уже к 1 августа'
  public text1 = 'Томский госуниверситет (ТГУ) первым в РФ получит лицензию мобильного оператора для реализации проекта "Юнивермобайл", рассчитанного на обслуживание всех студентов и преподавателей Томска; проект реализуется совместно с Tele2 и будет запущен не позднее августа 2020 года, сообщает в пятницу ТАСС.'
  public title2 = 'Томские студенты разработали концепт университетского оператора связи на сети Tele2'
  public text2 = 'Tele2 подводит итоги стипендиальной программы для студентов Национального исследовательского Томского государственного университета. Участники конкурса работали над концепцией нового виртуального оператора связи – совместного проекта университета и Tele2. Заявки на соискание стипендии подали 64 студента, а лучшим был признан проект оператора с названием ALOHA.'
  public title3 = 'ALOHA - лови ритм жизни'
  public text3 = 'В случае запуска проекта, Tele2 предоставит университету инфраструктуру, а специалисты MVNO-дирекции проконсультируют по вопросам внедрения.'
  public placeholderTitle = 'Hello world!'
  public placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  public author = 'Станислав Ижик'
  public newsDate: Date = new Date()

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<{ title: string, text:string }[]>('/assets/news.json');
  }

  getNewsAsObs() {
    return of(this.getNews())
  }

  // GetSomeNews() {
  //   return [{ "id": 1 },{ "id": 56 }];
  // }

  // getNewsAsObs() {
  //   return of(this.GetSomeNews());
  // }


}
