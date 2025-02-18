import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { RolesComponent } from './components/roles/roles.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        canActivateChild:[AuthGuard],
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "users",
                component: UserComponent
            },
            {
                path: "roles",
                component: RolesComponent
            }
        ]
    }
];
