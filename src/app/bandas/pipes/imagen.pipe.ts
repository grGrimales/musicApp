import { Pipe, PipeTransform } from '@angular/core';
import { Banda } from '../interfaces/banda.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(banda: Banda): string {

if(!banda.alt_img || banda.alt_img === "" ) {
  return 'assets/no-image.png';
} else {
  return banda.alt_img
}


}

}
