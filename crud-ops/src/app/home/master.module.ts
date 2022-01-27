import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master.component';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/routing.mainrouting';
import { BaseLogger, ConsoleLogger } from '../Utility/Utility.Logger';

var providerscroll:any=[];
providerscroll.push({provide:BaseLogger,useClass:ConsoleLogger});
@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [providerscroll],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
