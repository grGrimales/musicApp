import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Banda } from '../../interfaces/banda.interface';
import { switchMap } from 'rxjs/operators';
import { BandasService } from '../../services/bandas.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  };
  mat-card {
    margin-top: 20px;
  }
  card {
  max-width: 400px;
}
.video{
  margin-top: 10px
}
  `
  ]
})

export class BandaComponent implements OnInit {
  url: Banda;
  banda!: Banda;
  
  constructor(private activatedRouter: ActivatedRoute, 
    private bandaService:BandasService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.bandaService.getBandasPorId( id ))
    )
    .subscribe( banda => this.banda = banda);

  }
  regresar(){
    this.router.navigate(['/bandas/listado']);
  }
  urlPagina(){
  let urlPagina: string = `https://open.spotify.com/artist/${ this.url }=true`;

    return urlPagina;
  }
}
