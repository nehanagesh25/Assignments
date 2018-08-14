import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:string ;
  current = "";

 onClick(e){
   console.log(e);
  this.current = this.current + e;

 }

 onClick1(){

  this.current = eval(this.current);
 }

 onClick2(){
   this.current = "";
 }

  
}
