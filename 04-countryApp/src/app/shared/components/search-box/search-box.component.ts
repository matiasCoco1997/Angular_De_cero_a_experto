import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer : Subject<string> = new Subject<string>();

  private debouncerSubscription?: Subscription;

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = "";


  ngOnInit(): void {
    this.debouncerSubscription =

    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
      console.log("valor ingresado: ", value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue( value:string ):void{
    this.onValue.emit(value);
  }

  onKeyPress ( searchTerm : string ): void {
    this.debouncer.next(searchTerm);
  }


}
