import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:"contact",component:ContactComponent},
    {path:"product/:id",component:SingleProductComponent},
];
