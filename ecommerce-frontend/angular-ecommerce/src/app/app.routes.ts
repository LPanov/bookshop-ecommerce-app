import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';

export const routes: Routes = [
    {path: 'category/:id', component: ProductList},
    {path: 'category', component: ProductList},
    {path: 'products', component: ProductList},
    { path: '', redirectTo: '/category/1', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/category/1', pathMatch: 'full' }

];
