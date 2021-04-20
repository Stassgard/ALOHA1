import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class SubscriptionsService {

     getSubscriptionType() {
        return [
            {"type" : "Каждый день"},
            {"type" : "Один раз в две недели"},
            {"type" : "Один раз в месяц"}
            ];
        }

  
    constructor(private http: HttpClient) {}

    getSubscriptionList() {
        return this.http.get<any[]>('/assets/subscriptions.json');
      }

      
  }

  