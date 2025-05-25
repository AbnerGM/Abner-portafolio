import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  mostrarLenguajes = false;
  lenguajes = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Angular', 'kotlin', 'Java', 'react', 'php',];

  toggleLenguajes() {
    this.mostrarLenguajes = !this.mostrarLenguajes;
  }
}