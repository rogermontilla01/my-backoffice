import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {StaffService} from '../services/staff.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {

  regForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private staffReg: StaffService,
    private route: Router
  ) {
      this.regForm = this.fb.group({
        name:["",[Validators.required, Validators.minLength(4)]],
        user:["", Validators.required],
        position: ["", Validators.required],
        password:["", Validators.required],
        email:["", Validators.required]
      })
   }

  register(){
    console.log(this.regForm.value)
    //Ejemplo con error en observable
    this.staffReg.register(this.regForm.value).subscribe(data=>{
      //Salio todo bien
      console.log(data)
      this.route.navigate(['/login'])
    }, err=>{
      //en caso de error
      alert(err.error.msg)})
  }

  ngOnInit(): void {
  }

}
