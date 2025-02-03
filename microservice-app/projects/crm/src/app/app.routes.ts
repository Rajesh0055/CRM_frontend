import { Routes } from '@angular/router';
// import { LoginpageComponent } from './components/clients/loginpage.component';
import { CRMAdminComponent } from './components/crm-admin/crm-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ReportsComponent } from './components/reports/reports.component';

export const crmRoutes: Routes = [
    { path: 'crm-admin', component: CRMAdminComponent },
    {path:'crm-clients', component: ClientsComponent},
    { path: 'crm-leads', component:LeadsComponent  },
    { path: 'crm-reports', component: ReportsComponent},
    { path: '', redirectTo: 'crm-admin', pathMatch: 'full' }
];
