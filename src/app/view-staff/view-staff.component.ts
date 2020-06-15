import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {

  elemntID='';
  displayedColumns: string[] = ['name', 'user', 'email', 'position', 'options'];
  dataSource:any = []

  constructor(private staffService: StaffService, private route: Router) {
    this.staffService.getAllStaff().subscribe((data) => {
      console.log(data);
      this.dataSource = data['data'];
    });
  }

  deleteStaff(data){
    this.staffService.delete(data).subscribe(data=>{
      console.log(data)
      //Solicitar datos de nuevo:
      this.staffService.getAllStaff().subscribe((data) => {
        console.log(data);
        this.dataSource = data['data'];
      })
    })
  }

  ngOnInit(): void {}
}
