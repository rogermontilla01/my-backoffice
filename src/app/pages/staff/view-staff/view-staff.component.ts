import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staffData: any;
  displayedColumns: string[] = ['name', 'user', 'email', 'position', 'options'];
  dataSource: MatTableDataSource<staffElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private staffService: StaffService, private route: Router) {}

  deleteStaff(data) {
    this.staffService.delete(data).subscribe((data) => {
      console.log(data);
      //Solicitar datos de nuevo:
      this.staffService.getAllStaff().subscribe((data) => {
        console.log(data);
        this.staffData = data['data'];
        this.dataSource = new MatTableDataSource(this.staffData);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  ngOnInit(): void {
    this.staffService.getAllStaff().subscribe((data) => {
      console.log(data);
      this.staffData = data['data'];
      this.dataSource = new MatTableDataSource(this.staffData);
      this.dataSource.paginator = this.paginator;
    });
  }
}

export interface staffElement {
  name: string;
  user: string;
  email: string;
  position: string;
}
