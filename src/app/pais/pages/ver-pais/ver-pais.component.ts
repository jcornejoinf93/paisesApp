import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private paisService: PaisService ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( params => {
    //   const { id } = params;
    //   // console.log(id);

    //   this.paisService.getPaisPorCodigo( id ).subscribe( pais => console.log(pais));
    // });

    this.activatedRoute.params
        .pipe(
          switchMap( (param) => {
            const {id} = param;
            return this.paisService.getPaisPorCodigo(id);
          }),
          // tap(console.log)
        )
        .subscribe( pais => this.pais = pais);
  }

}
