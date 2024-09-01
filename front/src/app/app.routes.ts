import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HistoryComponent } from '../pages/history/history.component';
import { LiveComponent } from '../pages/live/live.component';

export const routes: Routes = [
    {
        path:"home",
        component:LiveComponent,
        title: "Home | GetCricket"
    },
    {
        path:"history",
        component:HistoryComponent,
        title: "History | GetCricket"
    },
    {
        path:"live",
        component:LiveComponent,
        title: "Live Matches | GetCricket"
    },
    {
        path:'',
        component:HistoryComponent,
        pathMatch:'full'
    }

];
