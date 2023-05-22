import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../admin-user-page/admin-user-page.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './user-card-page.component.html',
  styleUrls: ['./user-card-page.component.scss'],
})
export class UserCardPageComponent implements OnInit {
  user!: User | null;

  constructor(
    private routeService: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('r-params', this.routeService.snapshot.params);

    const userId = (this.routeService.snapshot.params as any).id;
    // this.user = this.routeService.snapshot.params as User;

    this.userService.getUserById(userId).subscribe({
      next: (data: User) => {
        this.user = data;
      },
    });
  }
}
