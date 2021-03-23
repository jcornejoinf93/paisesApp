import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = '';
  public sinResultado: boolean = false;
  public capitales: Country[] = [];
  public placeholder: string = 'Por Capital';

  constructor( private paisService: PaisService ) { }

  buscar(termino: string) {
    this.termino = termino;
    if ( termino.trim().length > 0 ) {
      this.paisService.buscarCapital(termino).subscribe( resp => {
        // console.log(resp);
        this.capitales = resp;
        this.sinResultado = false;
      }, err => {
        this.sinResultado = true;
        this.capitales = [];
      });
    } else {
      this.capitales = [];
    }
  }

}
