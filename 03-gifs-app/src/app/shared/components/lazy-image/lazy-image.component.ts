import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})

export class LazyImageComponent implements OnInit {

  public hasLoaded: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string = "No title";

  ngOnInit(): void {
    if( !this.url ){
      throw new Error("Url property is required.");
    }
  }

  onLoad():void{
    setTimeout( () => {
      this.hasLoaded = true;
    }, 1000);
  }

}
