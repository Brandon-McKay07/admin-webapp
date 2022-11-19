import { UsersService } from 'src/app/services/users.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  public users:any[] =[];

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
       this.users = response;
      }, error:(error) => {
        alert('There was an error in retrieving data from the server');
      }
    });
  }

}
