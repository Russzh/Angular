import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UsersService,
    private router: Router) {

     }

  ngOnInit() {
    this.form = new FormGroup({
      "email" : new FormControl(null, [Validators.required, Validators.email]),
      "password" : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      "name" : new FormControl(null, [Validators.required]),
      "agree" : new FormControl(false, [Validators.required, Validators.requiredTrue]) 
    });
  }
  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.userService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        })
      });
  }

}
