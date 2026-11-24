import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule, JsonPipe, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonModule,
  ],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
  pays = ['France', 'Belgique', 'Suisse', 'Canada'];

  model = {
    fullname: '',
    age: null as number | null,
    country: '',
    email: '',
  };

  resultat: any = null;

  onSubmit() {
    this.resultat = { ...this.model };
    console.log(this.resultat);
  }
}