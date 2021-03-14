import { Pipe, PipeTransform } from '@angular/core';
import { Banda } from '../interfaces/banda.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(banda: Banda): string {

    if( !banda.id || banda.alt_img === "" ){
      return 'assets/no-image.png';
    }else if ( banda.alt_img ){
      return banda.alt_img;
    }else{
      return `assets/imagenes/${ banda.id}.jpg`;
    }
  }


}
