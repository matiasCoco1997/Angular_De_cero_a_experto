import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower : string = "matías";
  public nameUpper : string = "MATÍAS";
  public fullName : string = "MAtíAs COCo";


}
