import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/Services/read.service';
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
  constructor(private users: UserService,private read:ReadService) {}
  ngOnInit(): void {
    this.read.getUsers().subscribe((user:any)=>{
      
      this.UserFilter=user.filter((user:any)=>{
        return user.isDeleted===true;
      })
      
      
    })
    
    
   
  }
}
