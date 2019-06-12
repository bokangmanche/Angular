import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign In';
  weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  isavailable=true;

  myClickFuntion(event)
  {
      alert("Button is clicked");
      console.log(event);
  }

  weekdayChange(event)
  {
    alert("Weekeday changed");
    console.log(event);
  }
}
