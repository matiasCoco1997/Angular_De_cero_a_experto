import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup( {
    id:               new FormControl<string>(""),
    superhero:        new FormControl<string>("", { nonNullable:true }),
    publisher:        new FormControl<Publisher>(Publisher.DCComics || Publisher.MarvelComics),
    alter_ego:        new FormControl(""),
    first_appearance: new FormControl(""),
    characters:       new FormControl(""),
    alt_img:          new FormControl(""),
  });

  public publishers = [
    { id: "DC Comics", desc: "DC - Comics" },
    { id: "Marvel Comics", desc: "Marvel - Comics" }
  ];

  constructor(
    private _heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {

    if( !this.router.url.includes("edit")) return;

    this.activatedRoute.params
    .pipe(
      switchMap ( ({id}) => this._heroService.getHeroById(id) ),
    ).subscribe ( hero => {

      if (!hero){
        return this.router.navigateByUrl("/");
      }

      this.heroForm.reset(hero);
      return;
    })

  }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;

    return hero;
  }


  onSubmit():void{

    if( !this.heroForm.valid ) return;

    if( this.currentHero.id ){
      this._heroService.updateHero(this.currentHero).
      subscribe( hero => {
        this.showSnackbar(`¡${hero.superhero} actualizado!`);
      });

      return;
    }

    this._heroService.addHero (this.currentHero )
    .subscribe( hero => {
      this.router.navigate(["/heroes/edit", hero.id])
      this.showSnackbar(`¡${hero.superhero} creado!`);
    });
  }

  onDeleteHero():void{
    if( !this.currentHero.id ){
      throw Error("Hero id is required");
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
    .pipe(

      //Filter si la respuesta es verdadera retorna un true solo si es true, sino corta la ejecución.
      filter( (result: boolean) =>  result ),

      //En el caso de que el filter anterior sea verdadero ejecuta el delete.
      switchMap( () => this._heroService.deleteHeroById( this.currentHero.id ) ),

      /*En el caso de que se haya ejecutado el delete correctamente retorna un true,
        en el caso de que sea false no ejecuta el subscribe.*/
      filter( (wasDeleted:boolean) => wasDeleted )
    )
    .subscribe(() => {
      //Esto solo se ejecuta si se cumple con todas las condiciones anteriores
      this.router.navigateByUrl("/heroes")
    })

  }


  showSnackbar( message:string ):void{
    this.snackbar.open(message, "cerrar", {
      duration:2500
    })
  }
}
