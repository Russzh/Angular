import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { window } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  date: Date = new Date();
  user: User;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
