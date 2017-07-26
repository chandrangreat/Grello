import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './core/material.module';
import { environment } from '../environments/environment';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      imports: [RouterTestingModule, MaterialModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain Grello in page title (Improper Test)', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    expect(environment.title).toContain('Grello');
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
