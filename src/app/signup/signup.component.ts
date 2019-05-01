import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userService/user.service';
import {User} from '../model/user/user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    user: User = {
        id: null,
        email: '',
        lastName: '',
        name: '',
        password: '',
    };

    isWrong = '';
    hidden = false;
    hasDanger = '';

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {

    }

    login() {
        this.isWrong = ' ';
        this.hasDanger = ' ';
        this.hidden = false;
        this.userService.login(this.user).subscribe(res => {
           if (res === null) {
               this.hasDanger = 'has-danger';
               this.isWrong = 'form-control-danger';
               this.hidden = true;
           } else {
              this.user = res;
              localStorage.setItem('user', JSON.stringify(this.user));
              this.router.navigate(['/home']);
           }
        });
    }


}
