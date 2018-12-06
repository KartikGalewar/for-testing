import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>{{name}}</h1><br/>
              <h1 [innerHtml]='name' ></h1> 
              
              <img [src]='imgPath'><br>
             
              <button disabled={{isDisabled}}>Click me</button>  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string='Kartik';
  imgPath:string='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  isDisabled:boolean=true;
}
