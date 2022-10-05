import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman', 
    'Thor', 
    'Hulk', 
    'Ironman'
  ];
  seBorro: boolean = false;

  heroeBorrado: string = '';

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado || '';
    this.seBorro = true;
    if (!heroeBorrado) {
      this.seBorro = false;
    }
  }
}

