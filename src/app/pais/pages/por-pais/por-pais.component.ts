import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      /* a {
        text-decoration: none;
        color: black;
      } */
    `
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public sinResultado: boolean = false;
  public placeholder: string = 'Por País';
  public ocultarSugerencia: boolean =true;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    if ( this.termino.trim().length > 0 ) {
        this.paisService.buscarPais(termino).subscribe( resp => {
        this.paises = resp;
        this.sinResultado = false;
        this.ocultarSugerencia = false;
      }, err => {
        //  console.log(err);
         this.sinResultado = true;
         this.paises = [];
       }
      );
    } else {
      this.paises = [];
    }
  }

  sugerencia(termino: string){
    this.sinResultado = false;
    // TODO: Crear sugerencia
    this.paisService.buscarPais(termino).subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5);
    },
    err => this.paisesSugeridos = []
    );
  }

}
