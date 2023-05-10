import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { ReadService } from 'src/Services/read.service';

import { UserService } from 'src/Services/user.service';
import { User } from 'src/User/user/User.interface';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  
  Users!: any;
  UserFilter!:User[];
  Activepage!:boolean;
  DeletePage!:boolean;
  btnLable!:string;
  test:string='delete';

  constructor(private router: ActivatedRoute, private users: UserService,private read:ReadService) {
    
  }

  ngOnInit(): void {
    this.read.getUsers().subscribe((user:any)=>{
      
      this.UserFilter=user.filter((user:any)=>{
        return user.isDeleted===false;
      })
      
      
    })
    
    // this.Users = this.users.Users.map((user: User): any => {
    //   if (!user.isDeleted) {
    //     return user;
    //   }
    // });
    // this.UserFilter=this.Users.filter((user:User):any=>{
    //     if(user){
    //       return user
    //     }
    // })
    
    
  }

}
