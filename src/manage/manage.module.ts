import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';

import { ManageComponent } from './manage/manage.component';
import { UserModule } from 'src/User/user/user.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ManageComponent, DetailsComponent],
  imports: [CommonModule, ManageRoutingModule, UserModule],
  exports: [ManageComponent],
})
export class ManageModule {}
