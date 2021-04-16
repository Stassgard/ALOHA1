import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsService} from "../services/news.service";
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import subscriptions from "../news/subscriptions.json";
import value from '../news/subscriptions.json';
import { selectNews, areNewsLoaded } from 'src/store/selectors/news.selectors';
import { NewsState } from 'src/store/reducers/news.reducer';
import { LoadNews } from 'src/store/actions/news.actions';
import { Store } from '@ngrx/store';

interface SubscriptionType {
  value: string;
  viewValue: string;
}

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
  subscriptionsList:{email:string,subtype:string}[]=subscriptions;
  subscription: SubscriptionType[] = [
    {value: 'Каждый день', viewValue: 'Каждый день'},
    {value: 'Один раз в две недели', viewValue: 'Один раз в две недели'},
    {value: 'Один раз в месяц', viewValue: 'Один раз в месяц'},
  ];

  selectNews$ = this.store.select(selectNews);
  areNewsLoaded$ = this.store.select(areNewsLoaded);

  constructor(public newsService: NewsService, private formBuilder:FormBuilder, private store: Store<NewsState>) {}

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

  saveSubscription(){
    // const SaveJSON = (filename='', json='""') =>{
    // return this.(filename, JSON.stringify(json))
    // }
     
   this.subscriptionsList.push(this.subscriptionForm.value)

    // SaveJSON('subscriptions.json',this.subscriptionForm.value)
    
      console.log(this.subscriptionForm.value);
  }


}


// this.someOutput.emit('123');
    // this.profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl('')
    // })

    // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);