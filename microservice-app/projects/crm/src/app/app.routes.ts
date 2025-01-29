import { Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { CRMAdminComponent } from './components/crm-admin/crm-admin.component';

export const crmRoutes: Routes = [
    { path: 'crm-dashboard', component: CRMAdminComponent },
    //{ path: 'crm-clients', component:  },
   // { path: 'crm-notifications', component: CRMNotificationsComponent },
    { path: '', redirectTo: 'crm-dashboard', pathMatch: 'full' }
];
