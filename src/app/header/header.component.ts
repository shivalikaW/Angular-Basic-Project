import { Component, OnInit,ViewChild,Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = '';
  constructor(private router:Router) { }
isLoggedIn=false;
  ngOnInit() {
    console.log("Header Init");
    // this.isLoggedIn = this.signIn.isLoggedIn;
    console.log(this.isLoggedIn);
    this.username = window.localStorage.getItem('userid');
  }
  onLogout() {
    localStorage.removeItem('userid');
    this.router.navigate(['../']);
  }
}
