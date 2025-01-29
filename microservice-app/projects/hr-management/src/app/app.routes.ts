import { Routes } from '@angular/router';
import { HRAdminComponent } from './components/hr-admin/hr-admin.component';

export const hrroutes: Routes = [

    { path: 'hr-admin', component: HRAdminComponent },
    // { path: 'hr-clients', component: HRClientsComponent },
    // { path: 'hr-notifications', component: HRNotificationsComponent },
    { path: '', redirectTo: 'hr-admin', pathMatch: 'full' }
];
