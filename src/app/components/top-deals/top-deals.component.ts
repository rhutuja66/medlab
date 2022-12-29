import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  topDeals:any[] = [
    {
      "drugCode":381015,
      "actualPrice":4,
      "maxQuantity":60,
      "productImageSlug":[
        "https://mb-meds-assets.medibuddy.in/medicinesImages/381015.jpg"
      ]
    },
    {
      "drugCode":381017,
      "actualPrice":4,
      "maxQuantity":60,
      "productImageSlug":[
        "https://mb-meds-assets.medibuddy.in/medicinesImages/381015.jpg"
      ]
    }

  ]
}