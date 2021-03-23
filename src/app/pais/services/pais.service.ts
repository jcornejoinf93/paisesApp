import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais(nombre: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_url}/name/${nombre}`);
  }

  buscarCapital(nombre: string) {
    return this.http.get<Country[]>(`${this.api_url}/capital/${nombre}`);
  }

  getPaisPorCodigo(codigo: string) {
    return this.http.get<Country>(`${this.api_url}/alpha/${codigo}`);
  }
}
