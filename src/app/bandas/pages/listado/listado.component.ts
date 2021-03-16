import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../../interfaces/banda.interface';
import { BandasService } from '../../services/bandas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {


  bandas: Banda[] = [];
  constructor( private bandasService: BandasService) { }

  ngOnInit(): void {

    this.bandasService.getBandas()
    .subscribe( bandas => {


      //console.log(bandas[0].alt_img);
      this.bandas = bandas

    } );


  }

}
