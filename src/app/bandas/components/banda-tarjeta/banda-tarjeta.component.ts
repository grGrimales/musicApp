import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banda } from '../../interfaces/banda.interface';

@Component({
  selector: 'app-banda-tarjeta',
  templateUrl: './banda-tarjeta.component.html',
  styles: [
    `
  mat-card {
    margin-top: 20px;
  }
  `
  ]
})
export class BandaTarjetaComponent implements OnInit {

  @Input() banda!: Banda;
  constructor() { }

  ngOnInit(): void {
  }

}
