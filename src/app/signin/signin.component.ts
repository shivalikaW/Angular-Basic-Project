import { Component, OnInit,Input } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
username='';
isLoggedIn=false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('userid');
  }
  onSignin(form: NgForm) {
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    if(email == "Shivi" && password == "1234"){
      window.localStorage.setItem('userid',email);
      this.isLoggedIn = true;
      this.router.navigate(['grid']);  
    }
    else{
      this.isLoggedIn = false;
      alert("Invalid credentials");
      console.log("Login failed");
    }
  }  
}
