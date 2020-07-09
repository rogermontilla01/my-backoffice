import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffService } from '../services/staff.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  authState:boolean;
  
  constructor(private staffService: StaffService){
    this.staffService.isAuthenticate().subscribe((state)=>{
      if(state){
        this.authState = true
      }else{
        this.authState = false
      }
    })
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.authState) {
        return true;
      } else {
        return false;
      }
  }
  
}
