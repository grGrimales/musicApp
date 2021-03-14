import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BandaComponent } from './pages/banda/banda.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BandasRoutingModule } from './bandas-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { BandaTarjetaComponent } from './components/banda-tarjeta/banda-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [AgregarComponent, BuscarComponent, BandaComponent, HomeComponent, ListadoComponent, BandaTarjetaComponent, ImagenPipe, ConfirmarComponent],
  imports: [
    CommonModule,
    BandasRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class BandasModule { }
