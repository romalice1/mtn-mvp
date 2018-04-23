import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { TradePartnersComponent } from './components/trade-partners/trade-partners.component'
import { DistributorsComponent } from './components/distributors/distributors.component'
import { RetailersComponent } from './components/retailers/retailers.component'
import { TopupsComponent } from './components/topups/topups.component'
import { TransactionsComponent } from './components/transactions/transactions.component'
import { VendsComponent } from './components/vends/vends.component'

// Define app routes
const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'trade-partners', component: TradePartnersComponent },
	{ path: 'distributors', component: DistributorsComponent },
	{ path: 'retailers', component: RetailersComponent },
	{ path: 'topups', component: TopupsComponent },
	{ path: 'transactions', component: TradePartnersComponent },
	{ path: 'vends', component: VendsComponent }
];
// END Define app routes

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}