import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewsService} from "./services/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ALOHA';
  // @Input()
  // someInput = '123';
  // @Output()
  // someOutput = new EventEmitter<string>();
  // profileForm: FormGroup;

  constructor(private newsService: NewsService) {
    // this.someOutput.emit('123');
    // this.profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl('')
    // })
}
// onSubmit(){
//     console.log(this.profileForm.value);
// }
}
