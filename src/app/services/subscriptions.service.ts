import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import subscriptions from '../../assets/subscriptions.json';



@Injectable({ providedIn: 'root' })
  export class SubscriptionsService {

    subscriptionsList:{email:string,subtype:string}[]=subscriptions;

     getSubscriptionType() {
        return [
            {"type" : "Каждый день"},
            {"type" : "Один раз в две недели"},
            {"type" : "Один раз в месяц"}
            ];
        }

    constructor(private http: HttpClient) {}

    // getSubscriptionList() {
    //     return this.http.get<any[]>('/assets/subscriptions.json');
    //   }
    
  }

  