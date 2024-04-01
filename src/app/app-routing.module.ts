import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './page/biografia/biografia.component';
import { UniversidadComponent } from './page/universidad/universidad.component';
import { VentanalistaComponent } from './page/ventanalista/ventanalista.component';

const routes: Routes = [

{path:'universidad',component:UniversidadComponent},
{path:'ventanalista',component:VentanalistaComponent},
{path:'biografia',component:BiografiaComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
