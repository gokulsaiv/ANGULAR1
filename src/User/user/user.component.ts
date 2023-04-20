import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from './User.interface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() userData!: User[];
  Users!: any;
  UserFilter!: User[];
  Activepage!: boolean;
  DeletePage!: boolean;
  btnLable!: string;

  constructor(private router: ActivatedRoute, private users: UserService) {}

  ngOnInit(): void {
    this.Users = this.users.Users.map((user: User): any => {
      if (this.router.snapshot.data['route'] === 'active' && !user.isDeleted) {
        return user;
      }
      if (this.router.snapshot.data['route'] === 'delete' && user.isDeleted) {
        return user;
      }
    });
    this.UserFilter = this.Users.filter((user: User): any => {
      if (user) {
        return user;
      }
    });
    this.Activepage =
      this.router.snapshot.data['route'] === 'active' ? true : false;
    this.DeletePage =
      this.router.snapshot.data['route'] === 'delete' ? true : false;
    switch (this.router.snapshot.data['route']) {
      case 'active':
        this.btnLable = 'Deactivate';
        break;
      case 'delete':
        this.btnLable = 'Activate';
        break;
      case 'manage':
        this.btnLable = 'Details';
        break;
    }
  }
  borderClass(isDeleted: boolean): any {
    if (!isDeleted) {
      return {
        border: '2px solid greenyellow ',
        'border-radius': '5px',
      };
    } else {
      return {
        border: '2px solid red ',
        'border-radius': '5px',
      };
    }
  }
  changeUserStatus(id: string) {
    this.users.changeUserStatus(id);
  }
}
