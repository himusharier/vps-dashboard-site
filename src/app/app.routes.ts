import { Routes } from '@angular/router';
import { DashboardShellComponent } from './layout/dashboard-shell.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { ServicesPageComponent } from './pages/services-page.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardShellComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'welcome' },
			{ path: 'welcome', component: DashboardPageComponent },
			{ path: 'services', component: ServicesPageComponent }
		]
	},
	{ path: '**', redirectTo: '' }
];
