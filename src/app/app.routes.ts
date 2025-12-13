import { Routes } from '@angular/router';
import { Loginpage } from './+public/+pages/login-page/loginpage';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BooksPage } from './+private/books-page/books-page';
import { MemberPage } from './+private/member-page/member-page';
import { BorrowsPage } from './+private/borrows-page/borrows-page';
import { ReportPage } from './+private/report-page/report-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    { path: 'login',canActivate:[privateGuard], component: Loginpage },
    {
        path: 'private', component: PrivateTemplate, children: [
            { path: 'books', component: BooksPage },
            { path: 'members', component: MemberPage },
            { path: 'borrows', component: BorrowsPage },
            { path: 'reports', component: ReportPage },
            { path: 'dashboard', component: DashboardPage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'dashbord', }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
