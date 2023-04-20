import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/User/user/User.interface';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'],
})
export class DeletedComponent implements OnInit {
  Users!: any;
  UserFilter!: User[];
  constructor(private users: UserService) {}
  ngOnInit(): void {
    this.Users = this.users.Users.map((user: User): any => {
      if (user.isDeleted) {
        return user;
      }
    });
    this.UserFilter = this.Users.filter((user: User): any => {
      if (user) {
        return user;
      }
    });
  }
}
