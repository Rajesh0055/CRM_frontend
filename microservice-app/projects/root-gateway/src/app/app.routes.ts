
import { Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';


export const commanRoutes: Routes = [
    { path: '', component: CommonComponent },  
    { path: '**', redirectTo: '' }  
];

