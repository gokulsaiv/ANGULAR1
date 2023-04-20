import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/User/user/User.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  userDetails!: User[];
  userId!: any;
  id: any;
  uData!: Observable<any>;
  //user Data feilds
  firstName!: string;
  lastName!: string;
  age!: number;
  loginId!: string;
  isDeleted!: string;

  constructor(
    private router: ActivatedRoute,
    private user: UserService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user.emitUser.subscribe((userData: any) => {
      this.ref.markForCheck();

      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
      this.age = userData.age;
      userData.isDeleted
        ? (this.isDeleted = 'InActive')
        : (this.isDeleted = 'Active');
      this.loginId = userData.login;
    });
  }
  StatusStyle(status: string): any {
    if (status == 'Active') {
      return {
        color: '#ADFF2F',
      };
    } else {
      return {
        color: '#FF0000',
      };
    }
  }
}
