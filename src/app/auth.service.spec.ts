import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
 // let authService = jasmine.createSpyObj('AuthService',['LogIn','LogOut'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers:[{provide: AuthService, useValue: authService}]
    });
    service = TestBed.inject(AuthService);
    //authService =TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return true when logged in', () => {
  //   //authService.LogIn = jasmine.createSpy().and.returnValue(true);
  //   const result = service.getIsUserOut;
  //   const expectedValue = true;
  //   expect(result).toEqual(expectedValue);
  // });

  it('should return true when logged in', () => {
    service.LogIn();
    service.getIsUserOut
    const expectedValue = true;
    expect(service.getIsUserOut).toEqual(expectedValue);
  });

  it('should return false when not logged in', () => {
    service.LogOut();
    service.getIsUserOut
    const expectedValue = false;
    expect(service.getIsUserOut).toEqual(expectedValue);
  });

  // it('should return true after the user has logged out', () => {
  //   service.LogOut();
  //   expect(service.LogOut()).toBeFalsy();
  // });
});
