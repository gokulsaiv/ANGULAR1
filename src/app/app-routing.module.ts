import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from 'src/active-module/active/active.component';
import { DeletedComponent } from 'src/deleted/deleted/deleted.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'active', component: ActiveComponent, data: { route: 'active' } },
  { path: 'delete', component: DeletedComponent, data: { route: 'delete' } },
  {path:'topic',component:TopicsComponent},

  {
    path: 'employee',
    loadChildren: () =>
      import('../manage/manage.module').then((m) => m.ManageModule),
    data: { route: 'manage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
