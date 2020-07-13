import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StaffService } from '../../../services/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css'],
})
export class EditStaffComponent implements OnInit {
  regForm: FormGroup;
  staffData;
  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private route: Router,
    private activatedRouted: ActivatedRoute
  ) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      user: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  processSubmit(event) {
    if (event) {
      console.log(this.regForm.value);
      let id = this.activatedRouted.snapshot.paramMap.get('id');
      this.staffService.updateStaff(id, this.regForm.value).subscribe(
        (data) => {
          //Salio todo bien
          console.log(data);
          this.route.navigate(['/view-staff']);
        },
        (err) => {
          //en caso de error
          alert(err);
        }
      );
    }
  }

  ngOnInit(): void {
    let id = this.activatedRouted.snapshot.paramMap.get('id');
    this.staffService.getStaffById(id).subscribe((data) => {
      this.staffData = data['data'];
      this.regForm.get('name').setValue(this.staffData.name);
      this.regForm.get('user').setValue(this.staffData.user);
      this.regForm.get('position').setValue(this.staffData.position);
      this.regForm.get('email').setValue(this.staffData.email);
      console.log(this.staffData);
    });
  }
}
