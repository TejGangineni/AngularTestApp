import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/animation';

@Component({
  selector: 'app-mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class MatNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  stringDate: string;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
        
    setInterval(() => {

      let currentDate = new Date();

      this.stringDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();

    }, 1000);

  }
  title = "Teja Gangineni";
  ngOnInit() {
  }

  isUserLoggedIn(){
    return !this.router.url.includes('/login');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}