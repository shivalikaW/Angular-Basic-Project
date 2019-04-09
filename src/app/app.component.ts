import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NEW PROJECT';
  constructor(){}
  username = '';
  ngOnInit(){
       this.username = localStorage.getItem('userid');
       console.log(this.username);
  }
}
