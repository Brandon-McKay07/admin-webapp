import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  adminRef = new FormGroup({
    email: new FormControl(),
    password:new FormControl()
  });
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {}

  signIn(){
    let admin = this.adminRef.value;
    console.log(admin);
  }
}
