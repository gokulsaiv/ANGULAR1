import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UpdateService } from 'src/Services/update.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editForm:any;
  User:any;
  constructor(private fb:FormBuilder,private user:UserService,private put:UpdateService){

  }
  ngOnInit(): void {
      this.editForm=this.fb.group({
        password:[''],
        age:['']
      })
      this.user.emitUser.subscribe((userData: any) => {
        
        this.User=userData
  
        
      });

  }
  Onsubmit(){
    
    this.put.update(this.User,this.editForm.value)
    
  }

}
