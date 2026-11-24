import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [TemplateDriven, ReactiveForm, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  afficher = signal(false);

  toggle() {
    this.afficher.update(v => !v);
  }
}