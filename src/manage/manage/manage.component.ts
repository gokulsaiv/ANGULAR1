import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/User/user/User.interface';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  constructor(private users: UserService, private router: ActivatedRoute) {}
  UserData: User[] = this.users.Users;
  userDetails!: User[];
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
  handleDetailBtnClick(user: User): any {
    this.users.getUserData(user);
  }
}
