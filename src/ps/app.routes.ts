import { Routes } from '@angular/router';
import { RegisterComponent } from './features/account/pages/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { IndexComponent } from './features/home/index/index.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'account', loadChildren: () => import('./features/account/account-routes').then(feature => feature.Account_Routes) },
    { path: 'register', component: RegisterComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', component: PageNotFoundComponent },
];
