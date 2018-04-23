import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TradePartnersComponent } from './components/trade-partners/trade-partners.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { RetailersComponent } from './components/retailers/retailers.component';
import { TopupsComponent } from './components/topups/topups.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';
import { VendsComponent } from './components/vends/vends.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    TradePartnersComponent,
    DistributorsComponent,
    RetailersComponent,
    TopupsComponent,
    TransactionsComponent,
    LoginComponent,
    VendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
