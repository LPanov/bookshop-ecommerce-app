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
  searchMode: boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } 
    else {
      this.handleListProducts();
    }

    
  }

  handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProducts(keyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts() {
    const idParam = this.route.snapshot.paramMap.get('id');

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
