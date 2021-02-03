import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePortfolioComponent,
    HomeSideBarComponent,
    HomeFooterComponent,
    TaskPoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
