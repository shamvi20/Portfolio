import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  private city: string = '';
  country = '';
  status = '';

  ngOnInit() {
    console.log('Hi init');
    this.title = 'new title';
    this.whereAmI();
  }

  whereAmI() {
    console.log('Hi');
    fetch(`https://geocode.xyz/41.3189957000,2.0746469000?json=1`)
      .then((response) => {
        console.log('response :', response);
        const data = response.json();
        if (!response.redirected) {
          this.status = `You are somewhere on the Earth`;
          return;
        }
        return data;
      })
      .then((data) => {
        console.log('data ', data);
        this.city = data.city;
        this.country = data.region;
        this.status = `You are in ${data.city}, ${data.country}`;
        console.log(`You are in ${data.city}, ${data.country}`);
      })
      .catch((error) => {
        console.log('error :', error);
      });
  }
}
