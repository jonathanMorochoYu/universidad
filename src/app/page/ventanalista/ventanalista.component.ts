import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Universidad } from 'src/app/domain/universidad';
import { UniversidadService } from 'src/app/services/universidad.service';

@Component({
  selector: 'app-ventanalista',
  templateUrl: './ventanalista.component.html',
  styleUrls: ['./ventanalista.component.scss']
})
export class VentanalistaComponent {
  listadoUniversidad: Universidad[] = []

  constructor(private universidadService: UniversidadService,
      private router: Router) {
    this.listadoUniversidad = universidadService.getList()
    console.log('listadoUniversidad', this.listadoUniversidad)
  }



  eliminar(event:Event ,universidad: Universidad) {
    event.preventDefault();
    const indice=this.listadoUniversidad.indexOf(universidad);
    if (indice !== -1){
      this.listadoUniversidad.splice(indice,1);

    }
    
  }


  editar(universidad: Universidad){
    console.log(universidad)
    let params: NavigationExtras = {
      queryParams: {
        universidad: universidad,
      }
    }
    this.router.navigate(['/universidad'], params)
  }

  goEditar(universidad: Universidad){
    console.log("editando", universidad)

    let params: NavigationExtras = {
      queryParams: {
        universidad: universidad
      }
    }

    this.router.navigate(['/universidad'], params)
  }

  gonewUni() {

    console.log("Llamando a crear");
    this.router.navigate(['universidad/crear']);
  }

  editUni(universidad: Universidad) {

    console.log("Editar uni" + Universidad);

    let params: NavigationExtras = {
      queryParams: {
        nombre: universidad.nombre,
        ncarrera: universidad.ncarrera,
        tiempo: universidad.tiempo,
        ubicacion: universidad.ubicacion

      }
    };

    this.router.navigate(['universidad/crear'], params);

  }



}



