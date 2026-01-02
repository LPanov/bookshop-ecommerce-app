import { Component } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../common/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, RouterLink, CommonModule],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products: Product[] = [];
  currentCategoryId: number | undefined;

  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.listProducts(params);
    });
  }

  listProducts(params: any) {
    const idParam = params.get('id');

    if (idParam !== null) {
      this.currentCategoryId = +idParam; 
    } else {
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );
  }
}
