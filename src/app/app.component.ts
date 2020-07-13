import { Component } from '@angular/core';
import { NavbarService } from "./services/navbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private navBarService: NavbarService,){
    this.navBarService.setNavBarState('Home')
  }
  title = 'my-backoffice';
}
