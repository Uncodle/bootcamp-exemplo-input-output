import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public hasAnswer = false;
  public userResponse;

  public getAnswer(userResponse: boolean) {
    this.userResponse = userResponse === true ? 'Gostaria' : 'Não gostaria';
    this.hasAnswer = true;
  }
}
