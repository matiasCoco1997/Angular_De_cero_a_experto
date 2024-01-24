import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },

  {
    path: 'about',
    component: AboutPageComponent
  },

  {
    path: 'contact',
    component: ContactPageComponent
  },

  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
    /*
      1) Adentro del import va la ruta estatica donde esta el archivo que se va a importar
      2) m = modulo
      3) m.CountriesModule es lo que se esta importando
    */
  },

  {
    path: '**',
    redirectTo: 'countries/by-capital'
  }



];

@NgModule({
  imports:[
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
