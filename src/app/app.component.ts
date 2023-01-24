import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  appName =
    'This printout is an example of string interpolation using one-way data binding';
  clientName: string = 'John Rubin Mora';
  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';
  myName = '';
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
