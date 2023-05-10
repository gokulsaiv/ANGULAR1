import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from 'src/Services/read.service';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/User/user/User.interface';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit{
  
  user$:any;
  userDetails!: User[];
  
  constructor(private users: UserService, private router: ActivatedRoute,private read:ReadService) {}
  ngOnInit(): void {
   this.read.getUsers().subscribe((data:any)=>{
    this.user$=data;
    
   })
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
  handleDetailBtnClick(user: User): any {
    this.users.getUserData(user);
  }
  handleEditBtnClick(user: User){
    this.users.getUserData(user);

  }
}

