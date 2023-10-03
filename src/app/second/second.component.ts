import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  first=0
second=0
output=0

constructor(private router:Router){}
calculate(){
  
  this.output=this.first+this.second
}

previous(){
  this.router.navigate(['find'])
}



}
