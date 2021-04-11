import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NewsComponent } from './news/news.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ArticleComponent } from './article/article.component';
import {LoginComponent} from "./login/login.component";
import {MatMenuModule} from "@angular/material/menu";
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { MatCardModule} from "@angular/material/card";
import { NewsService } from './services/news.service';


registerLocaleData(localeRu,'ru')

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ToolbarComponent,
    ArticleComponent,
    LoginComponent,
    Article2Component,
    Article3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
