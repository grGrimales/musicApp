import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Banda } from '../../interfaces/banda.interface';
import { BandasService } from '../../services/bandas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  bandas: Banda[]= [];
  bandaSeleccionado!: Banda | undefined;

  constructor( private bandasService: BandasService) { }

  ngOnInit(): void {
  }
  buscando(){

    this.bandasService.getSugerencias(this.termino.trim())
    .subscribe( bandas => this.bandas = bandas);
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){
    
    if(!event.option.value){
      this.bandaSeleccionado = undefined
      return;
    }
    const banda:Banda = event.option.value;
      this.termino = banda.nombre;
      this.bandasService.getBandasPorId(banda.id )
      .subscribe(banda => this.bandaSeleccionado = banda);
  }

}
