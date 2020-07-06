import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';


/** @title Responsive sidenav */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  staticNav = [
    { path: '/', name: 'Home' },
  ];
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
  ];
  
  
  private staffService: StaffService;

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  open(category){
    this.expanNav.forEach(element => {
      if(element.category == category && element.expaded == false){
          element.expaded = true
      }else{
        element.expaded = false
      }
    });
  }

  shouldRun = true;
}


