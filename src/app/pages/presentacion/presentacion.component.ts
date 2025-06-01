import { Component, AfterViewInit, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements AfterViewInit {
  mostrarLenguajes = false;
  lenguajes = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Angular', 'Kotlin', 'Java', 'React', 'PHP'];

  escrituraElemento!: HTMLElement;
  cianElemento!: HTMLElement;
  cursorElemento!: HTMLElement;
  frases = [
    { nombre: "Abner ", apellido: "Gomez" },
    { nombre: "Código es ", apellido: "Arte" }
  ];
  estado = "escribir";
  index = 0;
  fraseActual = 0;

  constructor(
    private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  toggleLenguajes() {
    this.mostrarLenguajes = !this.mostrarLenguajes;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.escrituraElemento = this.document.getElementById("escritura")!;
      this.cianElemento = this.document.getElementById("cian-texto")!;
      this.cursorElemento = this.document.getElementById("cursor")!;
      
      this.blinkCursor();

      setTimeout(() => {
        this.iniciarEfecto();
      }, 4000);
    }
  }

  blinkCursor() {
    setInterval(() => {
      this.renderer.setStyle(this.cursorElemento, 'opacity', this.cursorElemento.style.opacity === "1" ? "0" : "1");
    }, 500);
  }

  iniciarEfecto() {
    this.index = 0;
    this.estado = "escribir";
    this.renderer.setProperty(this.escrituraElemento, 'innerHTML', '');
    this.renderer.setProperty(this.cianElemento, 'innerHTML', '');
    const { nombre, apellido } = this.frases[this.fraseActual];

    let efecto = setInterval(() => {
      if (this.estado === "escribir") {
        if (this.index < nombre.length) {
          this.renderer.setProperty(this.escrituraElemento, 'innerHTML', this.escrituraElemento.innerHTML + nombre[this.index]);
        } else if (this.index < nombre.length + apellido.length) {
          this.renderer.setProperty(this.cianElemento, 'innerHTML', this.cianElemento.innerHTML + apellido[this.index - nombre.length]);
        } else {
          clearInterval(efecto);
          setTimeout(() => {
            this.estado = "borrar";
            this.borrarTexto();
          }, 1500);
        }
        this.index++;
      }
    }, 150);
  }

  borrarTexto() {
    const { nombre, apellido } = this.frases[this.fraseActual];
    let efecto = setInterval(() => {
      if (this.estado === "borrar") {
        if (this.index > nombre.length) {
          this.renderer.setProperty(this.cianElemento, 'innerHTML', apellido.substring(0, this.index - nombre.length - 1));
        } else if (this.index > 0) {
          this.renderer.setProperty(this.escrituraElemento, 'innerHTML', nombre.substring(0, this.index - 1));
        } else {
          clearInterval(efecto);
          this.fraseActual = (this.fraseActual + 1) % this.frases.length;
          setTimeout(() => {
            this.estado = "escribir";
            this.iniciarEfecto();
          }, 800);
        }
        this.index--;
      }
    }, 150);
  }
}
