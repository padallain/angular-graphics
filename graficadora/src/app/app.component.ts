import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTableComponent } from './input-table/input-table.component';
import { AddButtonComponent } from './add-button/add-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTableComponent,AddButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graficadora';


  addToData(){
    const inputX=document.getElementsByClassName('.x')
    const inputY=document.getElementsByClassName('.y')

    const info = new Map()
    info.set(inputX, inputY)
    
  }
}
