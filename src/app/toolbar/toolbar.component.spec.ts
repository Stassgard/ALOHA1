import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu'
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {AuthService} from "../auth.service";
import { Button } from 'protractor';
import { LoginComponent } from '../login/login.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [ ToolbarComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return true after the user has logged in', () => {
    
  //   service.LogIn();
    
  //   expect(service.LogIn()).toBeTruthy();
  // });


});
