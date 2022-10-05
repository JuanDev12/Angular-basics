import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>
            La base es <strong>{{ base }}</strong>
        </h3>

        <button (click)="acumular(-base)">-{{ base }}</button>
        <span> {{ number }} </span>
        <button (click)="acumular(base)">+{{ base }}</button>
    `
})

export class contadorComponent {
    title: string = 'Contador App';
    number: number = 0; 
    base: number = 3;

    public acumular(valor: number): void {
        this.number += valor;
    }
}