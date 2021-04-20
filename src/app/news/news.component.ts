import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsService} from "../services/news.service";
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import { selectNews, areNewsLoaded } from 'src/store/selectors/news.selectors';
import { NewsState } from 'src/store/reducers/news.reducer';
import { LoadNews } from 'src/store/actions/news.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { SubscriptionsService } from '../services/subscriptions.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']

})

export class NewsComponent implements OnInit {
  @Input()
  @Output()
  selectedValue!: string;
  subscriptionForm!: FormGroup;
  

  selectNews$ = this.store.select(selectNews);
  areNewsLoaded$ = this.store.select(areNewsLoaded);

  listofsubs = this.subscriptionsService.getSubscriptionList();
  subscriptionType = this.subscriptionsService.getSubscriptionType();


  constructor(public newsService: NewsService, private formBuilder:FormBuilder, private store: Store<NewsState>, private http: HttpClient, public subscriptionsService: SubscriptionsService) {}

  ngOnInit(): void {

    // Dispatch action
    this.store.dispatch(LoadNews());


    this.subscriptionForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      subtype:['', [
        Validators.required
      ]]
    });
  }

  get email() {
    return this.subscriptionForm.get('email');
  }


  saveSubscription() {

   this.http.get(this.subscriptionForm.value)
    console.log(this.subscriptionForm.value);
  };

  

}
