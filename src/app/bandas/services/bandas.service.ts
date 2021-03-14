import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banda } from '../interfaces/banda.interface';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>( `${ this.baseUrl }/bandas`);
  }

  getBandasPorId( id: string ):Observable<Banda>{
    return this.http.get<Banda>(`${ this.baseUrl }/bandas/${ id }`);
  }

  getSugerencias(termino: string ): Observable<Banda[]>{
    return this.http.get<Banda[]>(`${ this.baseUrl }/bandas?q=${ termino }&_limit=6`);

  }

  agregarBanda( heroe: Banda ): Observable<Banda>{
    return this.http.post<Banda>( `${ this.baseUrl }/bandas`, heroe);
  }

  actualizarBanda( heroe: Banda ): Observable<Banda>{
    return this.http.put<Banda>( `${ this.baseUrl }/bandas/${ heroe.id }`, heroe);
  }

  borrarBanda(id: string ): Observable<any>{
    return this.http.delete<any>( `${ this.baseUrl }/bandas/${ id }`);
  }

  
}
