import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const Account_Routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            // { path: 'forgot-password', component: ForgotPasswordComponent },
            // { path: 'reset-password', component: ResetPasswordComponent },
            // { path: 'verify-otp', component: VerifyOtpComponent }
        ]
    }
];

export { Account_Routes };