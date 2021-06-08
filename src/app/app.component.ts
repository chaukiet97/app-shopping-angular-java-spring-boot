import { UserService } from './shared/core/service/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-project';
  constructor(
    private userService:UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    if (!this.userService.getFe2User()) {
      this.router.navigate(['acount']);
    }
  }
}
