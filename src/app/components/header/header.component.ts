import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mensajeVisible = false;
  botonAnimado = true;
  nombre = 'estimado visitante';
  fecha = new Date();

  mostrarMensaje() {
    this.mensajeVisible = true;
    this.botonAnimado = false;

    setTimeout(() => {
      this.mensajeVisible = false;
      this.botonAnimado = false;
    }, 3000);
  }
}
