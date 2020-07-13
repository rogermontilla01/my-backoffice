import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-staff',
  templateUrl: './form-staff.component.html',
  styleUrls: ['./form-staff.component.css']
})
export class FormStaffComponent implements OnInit {

  @Input() regForm;

  @Output() submitForm = new EventEmitter<boolean>()

  constructor() { }

  formSubmit(){
    this.submitForm.emit(true)
  }

  ngOnInit(): void {
  }

}
