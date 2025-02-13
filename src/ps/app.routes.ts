import { Routes } from '@angular/router';
import { RegisterComponent } from './features/account/pages/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { IndexComponent } from './features/home/index/index.component';
import { AboutUsComponent } from './features/home/about-us/about-us.component';
import { CourseComponent } from './features/home/course/course.component';
import { ContactComponent } from './features/home/contact/contact.component';
import { TestimonialComponent } from './features/home/testimonial/testimonial.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'account', loadChildren: () => import('./features/account/account-routes').then(feature => feature.Account_Routes) },
    { path: 'register', component: RegisterComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', component: PageNotFoundComponent },
];
