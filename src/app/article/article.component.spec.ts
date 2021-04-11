import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NewsService} from "../services/news.service";
import { ArticleComponent } from './article.component';
import { registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu,'ru')

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      providers: [NewsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
