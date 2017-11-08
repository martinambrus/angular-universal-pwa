import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<menu></menu><router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(){
    console.log("I am Angular!")
  }
}
