import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mensajeVisible = false;

  enviarFormulario(event: Event) {
    event.preventDefault();
    this.mensajeVisible = true;
    setTimeout(() => {
      this.mensajeVisible = false;
    }, 5000);
  }
}
