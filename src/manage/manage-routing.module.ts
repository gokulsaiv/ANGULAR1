import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'manage',
    children: [{ path: 'details/:id', component: DetailsComponent }],
    component: ManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
