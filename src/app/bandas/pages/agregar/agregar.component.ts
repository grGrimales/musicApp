import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banda } from '../../interfaces/banda.interface';
import { BandasService } from '../../services/bandas.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {
  banda: Banda = {
    nombre: '',
    pais_origen: '',
    ano_lanzamiento: '',
    descripcion: ''
    
  }

  constructor(private bandasService: BandasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.bandasService.getBandasPorId(id))
      )
      .subscribe(banda => this.banda = banda);
  }

  guardar() {

    if (this.banda.nombre.trim().length === 0) {
      return
    }
    if (this.banda.id) {
      this.bandasService.actualizarBanda(this.banda)
        .subscribe(banda =>{ this.mostrarSnakbar('Registro actualizado');
        this.router.navigate(['/bandas/listado', banda.id]);
      }) 
        
    } else {
      this.bandasService.agregarBanda(this.banda)
        .subscribe(banda => {
          this.router.navigate(['/bandas/listado', banda.id]);
          this.mostrarSnakbar('Registro creado');
        })

    }

  }

  borrarBanda() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.banda
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.bandasService.borrarBanda(this.banda.id!)
            .subscribe(resp => {
              this.router.navigate(['/bandas']);
            });

        }
      }
    )


  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    })
  }

}
