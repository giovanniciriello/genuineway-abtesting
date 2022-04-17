import { Component, OnInit } from '@angular/core';
import { AbtestingService } from '../services/abtesting.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

}
