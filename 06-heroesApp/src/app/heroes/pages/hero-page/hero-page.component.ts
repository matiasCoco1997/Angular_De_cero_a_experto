import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl:'./hero-page.component.css'
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;


  constructor(
    private _heroesService: HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ){}


  ngOnInit(): void {

    this.ActivatedRoute.params.
    pipe(
      delay(2000),
      switchMap( ({ id }) => this._heroesService.getHeroById(id) )
    ). subscribe( hero => {

      if( !hero ){
        //en el caso de que el heroe no exista, redirije hacia el listado de heroes
        return this.router.navigateByUrl( "/heroes/list" )
      }

      this.hero = hero;
      return;
    })
  }

  goBack():void{
    this.router.navigateByUrl("heroes/list");
  }



}
