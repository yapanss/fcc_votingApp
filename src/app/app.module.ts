import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsModule } from 'ng2-charts';
import {TooltipModule} from 'ng2-tooltip-directive';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { ListPollComponent } from './list-poll/list-poll.component';
import { DetailPollComponent } from './detail-poll/detail-poll.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AddPollComponent,
    ListPollComponent,
    DetailPollComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    TooltipModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
