import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { NavbarService } from "../services/navbar.service";
import { Router } from '@angular/router';

/** @title Responsive sidenav */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  stateTitle

  showSideNav = false;

  staticNav = [{ path: '/', name: 'Home' }];
  expanNav = [
    {
      category: 'Products',
      expaded: false,
      datos: [
        { path: '/list-products', name: 'List' },
        { path: '/create-products', name: 'Register' },
      ],
    },
    {
      category: 'Staff',
      expaded: false,
      datos: [
        { path: '/register-staff', name: 'Staff Register' },
        { path: '/view-staff', name: 'Staff List' },
      ],
    },
    {
      category: 'Category',
      expaded: false,
      datos: [
        { path: '/create-category', name: 'Category Create' },
        { path: '/view-category', name: 'Category List' },
      ],
    },
    {
      category: 'About',
      expaded: false,
      datos: [
        { path: '/static-edit', name: 'Edit About' },
      ],
    },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private staffService: StaffService,
    private navBarService: NavbarService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.navBarService.navState$.subscribe((state)=>{
      this.stateTitle = state
    })

    this.staffService.isAuthenticate().subscribe((state)=>{
      if(state){
        this.showSideNav = true
      }else{
        this.showSideNav = false
      }
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.staffService.Logout();
    this.router.navigate(['/login']);
  }

  open(category) {
    this.expanNav.forEach((element) => {
      if (element.category == category && element.expaded == false) {
        element.expaded = true;
      } else {
        element.expaded = false;
      }
    });
  }

  shouldRun = true;
}
