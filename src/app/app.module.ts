import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from 'src/User/user/user.module';

import { ManageModule } from 'src/manage/manage.module';

import { ActiveModuleModule } from 'src/active-module/active-module.module';
import { DeletedModule } from 'src/deleted/deleted.module';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, TopicsComponent],

  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    ActiveModuleModule,
    DeletedModule,
  ],
})
export class AppModule {}
