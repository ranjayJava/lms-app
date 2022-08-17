import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ListLoansComponent } from './components/list-loans/list-loans.component';
import { LoanSearchComponent } from './components/loan-search/loan-search.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouteGuard } from './route.guard';



const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'home', 
    component: HomeComponent, canActivate:[RouteGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'welcome', 
    component: WelcomeComponent
  },
  { 
    path: 'logout', 
    component: LogoutComponent, canActivate:[RouteGuard]
  },
  { 
    path: 'loans', 
    component: ListLoansComponent, canActivate:[RouteGuard]
  },
  { 
    path: 'loan/:loanNumber', 
    component: LoanComponent, canActivate:[RouteGuard]
  },
  { 
    path: 'search', 
    component: LoanSearchComponent, canActivate:[RouteGuard]
  },
  { 
    path: '**', 
    component: ErrorComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
