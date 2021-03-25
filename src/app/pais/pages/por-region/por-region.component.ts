import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  sinResultado: boolean = false;

  constructor( private paisService: PaisService) { }

  activarRegion(region: string) {
    this.regionActiva = region;
    // console.log(this.regionActiva);

    this.paisService.getPaisPorRegion(region).subscribe(pais => {
      // console.log(pais);
      if (this.paises.length === 0) {
        this.sinResultado = true;
      }
      this.paises = pais;
      this.sinResultado = false;
    });


  }


}
