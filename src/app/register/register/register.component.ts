import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user/user';
import {UserService} from '../../services/userService/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: null,
    email: '',
    lastName: '',
    name: '',
    password: '',
  };
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.create(this.user).subscribe(res => {
      this.router.navigate(['/login']);
    })
  }
}
