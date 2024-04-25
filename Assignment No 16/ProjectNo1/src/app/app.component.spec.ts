
import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should count capital letters', () => {
    const capitalCount = component.CountCapital('Hello World');
    expect(capitalCount).toEqual(2);
  });

  it('should check if password is valid', () => {
    const isValid = component.CheckPassword('Passw0rd$');
    expect(isValid).toBeTruthy();
  });

  it('should add array of numbers', () => {
    const sum = component.ArrayAddition([1, 2, 3, 4, 5]);
    expect(sum).toEqual(15);
  });
});