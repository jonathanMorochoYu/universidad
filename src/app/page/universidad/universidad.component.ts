import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Universidad } from 'src/app/domain/universidad';
import { UniversidadService } from 'src/app/services/universidad.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.scss']
})
export class UniversidadComponent {
  universidad: Universidad = new Universidad();

  constructor(private universidadService: UniversidadService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.universidad = new Universidad()
        this.universidad = params['universidad']
      }
    }

  guardar() {
    console.log(this.universidad)
    this.universidadService.save(this.universidad)
    this.universidad = new Universidad()
  }



  Edita2() {
    console.log(this.universidad)
    this.universidadService.save(this.universidad)
    this.universidad = new Universidad()


    this.universidad = new Universidad()
  } 



}
