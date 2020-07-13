import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {StaffService} from '../../../services/staff.service'
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
    private route: Router,
    private _snackBar: MatSnackBar,
  ) {
      this.regForm = this.fb.group({
        name:["",[Validators.required, Validators.minLength(4)]],
        user:["", Validators.required],
        position: ["", Validators.required],
        password:["", Validators.required],
        email:["", Validators.required]
      })
   }

   processSubmit(event){
     if(event){
      console.log(this.regForm.value)
    //Ejemplo con error en observable
    this.staffReg.register(this.regForm.value).subscribe(data=>{
      //Salio todo bien
      console.log(data)
      this._snackBar.open('Staff was registered', 'Successfully', {
        duration: 2000
      })
      this.route.navigate(['/login'])
    }, err=>{
      //en caso de error
      alert(err.error.msg)})
     }
  }

  ngOnInit(): void {
  }

}
