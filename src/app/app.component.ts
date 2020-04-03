import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTwitter';
  name = 'Andres Rodriguez';

  num1 = 2;
  num2 = 3;
  resultSuma: number;
  


// constructor funcion de app component
constructor(){
this.resultSuma=0;
console.log('constructor.... APPcomponent create')
console.log('result suma', this.resultSuma);

//this.resultSuma = this.sumar();

}

// funcion para agregar two numbres
  sumar (){
console.log('Sumar');
this.resultSuma = this.num1 + this.num2;
  }









}
