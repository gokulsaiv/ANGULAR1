import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted/deleted.component';
import { UserModule } from 'src/User/user/user.module';

@NgModule({
  declarations: [DeletedComponent],
  imports: [CommonModule, UserModule],
})
export class DeletedModule {}
