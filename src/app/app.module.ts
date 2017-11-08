import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './component1/first.component';
import { SecondComponent } from './component2/second.component';
import { EchoService } from './services/echo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    bootstrap: [ AppComponent ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
          { path: '', redirectTo: '/firstComponent', pathMatch: 'full' },
        { path: 'firstComponent', component: FirstComponent },
        { path: 'secondComponent', component: SecondComponent }
      ])
  ],
  declarations: [ AppComponent, MenuComponent, FirstComponent, SecondComponent],
    providers: [EchoService]
})
export class AppModule {
}
