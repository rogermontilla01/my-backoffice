import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StaffService } from '../../services/staff.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  loginForm;

  constructor(private _fb: FormBuilder, private _auth: StaffService, private _router: Router, private _snackBar: MatSnackBar) {
    this.loginForm = this._fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    this._auth.Login(this.loginForm.value).subscribe(data=>{
      if(data['token'] === undefined){
        this._snackBar.open('Authentication failed', 'Please try again', {
          duration: 2000
        })
        this._router.navigate(['/login'])
      }else{
        localStorage.setItem('token', data['token'])
        this._auth.authenticate()
        this._snackBar.open('Bienvenido/a', 'MyEcommerce', {
          duration: 2000
        })

        this._router.navigate(['/'])
      }
      
      
    })
  }

  ngOnInit(): void {}
}
