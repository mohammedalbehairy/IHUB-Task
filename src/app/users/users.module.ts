import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './components/users-layout/users-layout.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [UsersLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
