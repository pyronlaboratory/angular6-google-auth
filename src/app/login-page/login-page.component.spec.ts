import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';

/**
 * @description This function describes a unit test for the 'LoginPageComponent' class
 * using Jest and React Testing Library. It sets up the testing environment using
 * TestBed.createComponent(), fixture.detectChanges() and returns an instance of the
 * component ( LoginPageComponent). The main functionality of the function is that
 * it defines one or more unit test cases with the use of 'it' block. In this example
 * only one it block is present which asserts that the component should exist.
 */
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

/**
 * @description This function is used to configure Jest's test setup for the
 * `LoginPageComponent`. It sets up TestBed and compiles the components that are
 * declared during setup().
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  }));

/**
 * @description This function is a beforeEach() block used to set up the test environment
 * for the LoginPageComponent unit tests. It creates an instance of the component
 * using TestBed.createComponent(), retrieves the component instance via
 * fixture.componentInstance and detects changes using fixture.detectChanges().
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/**
 * @description This function tests if the `component` object is truthy. Truthy is a
 * JavaScript concept meaning not null or false. It means "true". The intent of the
 * code within `it` is to test the component exists (it's true).
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
