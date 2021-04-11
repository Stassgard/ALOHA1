import { TestBed } from '@angular/core/testing';

//import { Router } from '@angular/router';
import { FirstGuard } from './first.guard';
//import { AuthService } from './auth.service';


describe('FirstGuard', () => {
  let firstGuard: FirstGuard;
  //let authService: AuthService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [
      //   FirstGuard,
      //   { provide: Router, useClass: { navigate: () => null } },
      //   { provide: AuthService, useClass: { } }
      // ]
    });
    
    firstGuard = TestBed.inject(FirstGuard);

  });

  it('should be created', () => {
    expect(firstGuard).toBeTruthy();
  });





  
 // it('be able to hit route when user is logged in', () => {
    // authService.isUserAuth = true;
    // expect(firstGuard.canActivate()).toBe(true);
    // const authService = TestBed.get(AuthService);
    // authService.isUserAuth = false;
    // const res = firstGuard.canActivate(null, null);
    // expect(res).toBeFalsy();
//});

// it('not be able to hit route when user is not logged in', () => {
//     authService.isUserAuth = false;
//     expect(firstGuard.canActivate()).toBe(false);
// });
  
});
