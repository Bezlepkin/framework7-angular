import { Component } from '@angular/core';
import Framework7 from 'framework7';


// Framework7.use([Popup, Panel]);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const aa = new Framework7({
      el: '#app',
      name: 'My App',
      id: 'com.myapp.gelstore',
      panel: {
        swipe: true,
      },
      popup: {
        swipeToClose: true,
      },
      theme: 'md',
    });
  }
}
