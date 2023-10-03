import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  <html><body> <h1>hello</h1> <p>hello i am angular</p></body>
  <input [id]="name" type="text" value="enter">
  <button (click)="getvalue(name)">get</button>

  <h1>string is  {{a}}</h1>
  <h1>string in UpperCase = {{upr}}</h1>
  <h1>string in LowerrCase = {{lwr}}</h1>
  <h1>string Length = {{len}}</h1>

  <h1 *ngIF="true">Hello</h1>
<h1 *ngIF="false">Bye Bye</h1>
  </html>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code';
  a="10";
upr="";
lwr="";
len=0;
public name="data";
  public getvalue(c:string){
this.a=c;
this.upr=c.toUpperCase();
this.lwr=c.toLowerCase();
this.len=c.length;
  }
}
