import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './gif-card/gif-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ]
})
export class GifsModule { }
