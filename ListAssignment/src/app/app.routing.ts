
import { Routes } from '@angular/router';
import { SorterComponentComponent } from './sorter-component/sorter-component.component';
import { ReportComponentComponent } from './report-component/report-component.component';

export const routes:Routes=[
    {
        path:'',
        pathMatch:"full",
        redirectTo:"sorter"
    },
    {
        path:"sorter",
        component:SorterComponentComponent
    },
    {
        path:"report",
        component:ReportComponentComponent
    }
]