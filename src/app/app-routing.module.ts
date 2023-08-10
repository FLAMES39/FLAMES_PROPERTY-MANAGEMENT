import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ActivateService } from './services/activate.service';
import { LandlordRegisterComponent } from './landlord-register/landlord-register.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'allProperty', canActivate:[ActivateService], loadComponent:()=> import('../app/all-property/all-property.component').then(m=>m.AllPropertyComponent)},
{path:'single/:id',loadComponent:()=> import('../app/single-property/single-property.component').then(m=>m.SinglePropertyComponent)},
{path:'RegLandlord' ,loadComponent:()=>import('../app/landlord-register/landlord-register.component').then(r=>r.LandlordRegisterComponent)},
{path: 'LogLandlord', loadComponent:()=> import('../app/landlord-login/landlord-login.component').then(r=>r.LandlordLoginComponent)},
{path:'footer',component:FooterComponent},
 {path:'UserReg',loadComponent:()=> import('../app/user-register/user-register.component').then(m=>m.UserRegisterComponent)},
{path:'add',canActivate:[ActivateService],loadComponent:()=> import('../app/add-property/add-property.component').then(m=>m.AddPropertyComponent)},
{path:'Reg',loadComponent:()=> import('../app/sign-up/sign-up.component').then(m=>m.SignUpComponent)},
{path:'login',loadComponent:()=> import('../app/user-login/user-login.component').then(m=>m.UserLoginComponent)},
{path:'footer',loadComponent:()=> import('../app/footer/footer.component').then(m=>m.FooterComponent)},
{path:'counter',component:CounterComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
