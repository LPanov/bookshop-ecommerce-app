import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ProductList, ProductCategoryMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
