import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../user/user.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UserModule {}
