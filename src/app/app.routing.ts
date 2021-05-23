import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CategoryComponent } from './page/category/category.component';
import { SliderComponent } from './page/slider/slider.component';
import { ProductComponent } from './page/product/main/product.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from 'src/auth/login/login.component';
import { BrandComponent } from './page/brands/main/brand.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth', 
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-producto',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-categoria',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-slider',
    component: SliderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-brand',
    component: BrandComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppModuleRouting {}
