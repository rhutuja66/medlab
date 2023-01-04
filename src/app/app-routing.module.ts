import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopDealsViewComponent } from './components/top-deals-view/top-deals-view.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'medicines',component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code',component:TopDealsViewComponent},
  {path:'view-top-details-by-category',component:ViewProductDetailsCategoryComponent},

  {path:'',redirectTo:'/home' , pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
