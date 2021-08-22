import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Get the id one time.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // If the route may change
    /*this.route.paramMap.subscribe(
      params => console.log(params.get('id'))
    )*/
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
