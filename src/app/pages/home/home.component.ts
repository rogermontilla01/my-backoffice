import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { NavbarService } from '../../services/navbar.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rows = [];

  ColumnMode = ColumnMode;

  constructor(
    private salesService: SalesService,
    private navBarService: NavbarService
  ) {
    this.navBarService.setNavBarState('Sales List');
    console.log(this.rows)
  }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(
      (data:any) => {
        let newArray= []
        console.log('Data: ', data);
        data.forEach((item) => {
          item['products'].forEach((element) => {
            newArray.push({
              product_id: element.product_id,
              prodname: element.name,
              price: element.price,
              quantity: element.quantity,
              total: element.price * element.quantity,
              date: item['date'],
              user: item['user']['user'],
              username: item['user']['name'] + ' ' + item['user']['lastname'],
            });
          });
        });
        console.log('New Array: ', newArray);
        this.rows = newArray;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
