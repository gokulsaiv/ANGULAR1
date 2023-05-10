import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active/active.component';
import { UserModule } from 'src/User/user/user.module';
import { UsersComponent } from 'src/User/user/user.component';




@NgModule({
  declarations: [
    ActiveComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    
  ],
  exports:[ActiveComponent]
})
export class ActiveModuleModule { }
