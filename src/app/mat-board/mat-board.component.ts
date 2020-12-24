import { Component, OnInit } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { User } from '../user-model';
import { UserService } from '../custom-service/user.service';

@Component({
  selector: 'app-mat-board',
  templateUrl: './mat-board.component.html',
  styleUrls: ['./mat-board.component.css']
})
export class MatBoardComponent implements OnInit{

  currentUser: User;
  users: User[] = [];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => { 
        this.loadAllUsers() 
    });
}
private loadAllUsers() {
  this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
  });
}

}