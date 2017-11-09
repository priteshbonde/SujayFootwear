import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    IsCreateModalHidden: boolean = true;
    ModalTitle: string;
    customer: Customer;
    constructor() {

        this.customer = new Customer();
    }

  ngOnInit() {
  }

  onCreateClick() {
      debugger;
      this.IsCreateModalHidden = false;
      this.ModalTitle = 'Add Customer';
  }
}
