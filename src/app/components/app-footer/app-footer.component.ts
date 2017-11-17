import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
   private date;

  constructor() {
    this.date =  new Date();
  }

}
