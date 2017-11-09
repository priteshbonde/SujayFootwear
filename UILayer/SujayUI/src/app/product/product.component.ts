import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product: Product;
    ModalTitle: string;
    constructor() {
        this.product = new Product();
        this.product.isActive = true;
        this.ModalTitle="Add Product"
    }

  ngOnInit() {
  }

}
