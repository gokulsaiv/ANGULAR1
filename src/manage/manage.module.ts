import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';

import { ManageComponent } from './manage/manage.component';
import { UserModule } from 'src/User/user/user.module';
import { DetailsComponent } from './details/details.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CombinePipe } from './manage/combine.pipe';
import { StatusPipe } from './details/status.pipe';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [ManageComponent, DetailsComponent, CreateFormComponent, CombinePipe, StatusPipe, EditComponent],
  imports: [CommonModule, ManageRoutingModule, UserModule,ReactiveFormsModule],
  exports: [ManageComponent],
})
export class ManageModule {}
