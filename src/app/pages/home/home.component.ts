import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  subtitulo:string = 'Componentes';


  cambiarSubTitulo(){
    this.subtitulo = 'Nuevo sub titulo desde el Padre';
  }

}
