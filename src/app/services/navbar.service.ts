import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navBarState = new Subject<string>();
  navState$ = this.navBarState.asObservable()
  constructor() { }

  setNavBarState(state: string){
    this.navBarState.next(state )
  }
}
