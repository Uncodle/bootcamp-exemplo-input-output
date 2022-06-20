import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Olá, {{name}}!</h1>
            Você já ouviu falar dos produtos Ivone?
            <br>
            <br>
            <button (click)="sendAnswer(true)">Sim</button>
            <button (click)="sendAnswer(false)">Não</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() answerFromUser: EventEmitter<boolean> = new EventEmitter<boolean>();

  public sendAnswer(value: boolean) {
    this.answerFromUser.emit(value);
  }
}
