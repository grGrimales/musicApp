import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Banda } from '../../interfaces/banda.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Banda) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  borrar() {
    this.dialogRef.close(true);

  }

  cerrar(){
    this.dialogRef.close();

  }

}
