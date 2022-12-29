import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss'],
})
export class TopDealsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
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
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  topDeals: any[] = [
    {
      drugCode: 381015,
      actualPrice: 4,
      maxQuantity: 60,
      discountPrice: 4,
      description: 'Electral powder 4.4G',
      availability: 'AVAILABLE',
      source: 'skuMaster',
      type: 'SACHET',
      isActive: 1,
      descriptionString: '4.4g Oral Powder in Sachet',
      discountPercentage: 0,

      productImageSlug: [
        'https://mb-meds-assets.medibuddy.in/medicinesImages/381015.jpg',
      ],
      composition: 'XYZ',
      medicineType: 'OTC_STORE',
      userLimit: 5,
      brand: 'FDC LIMITED',
      medicineCategory: 'Basic Health Essentials',
      medicineTag: ['top_3_deals', 'top_8_deals'],
      productDetailSlug: '[]',
      isOtc: true,
      genericDosage: 'xyz',
      searchable: 1,
      medicineName: 'xyz',
      schedule: 'O',
      size: 1,
      rxRequired: false,
      name: 'xyz',
      adjudicationFlag: 0,
      categoryId: 10,
      discountPercentageText: '0%',
      showAdjudicationFlag: false,
      adjudicationText: '',
    },
    {
      drugCode: 381018,
      actualPrice: 4,
      maxQuantity: 60,
      discountPrice: 4,
      description: 'Electral powder 4.4G',
      availability: 'AVAILABLE',
      source: 'skuMaster',
      type: 'SACHET',
      isActive: 1,
      descriptionString: '4.4g Oral Powder in Sachet',
      discountPercentage: 0,

      productImageSlug: [
        'https://mb-meds-assets.medibuddy.in/medicinesImages/381015.jpg',
      ],
      composition: 'XYZ',
      medicineType: 'OTC_STORE',
      userLimit: 5,
      brand: 'FDC LIMITED',
      medicineCategory: 'Basic Health Essentials',
      medicineTag: ['top_3_deals', 'top_8_deals'],
      productDetailSlug: '[]',
      isOtc: true,
      genericDosage: 'xyz',
      searchable: 1,
      medicineName: 'xyz',
      schedule: 'O',
      size: 1,
      rxRequired: false,
      name: 'xyz',
      adjudicationFlag: 0,
      categoryId: 10,
      discountPercentageText: '0%',
      showAdjudicationFlag: false,
      adjudicationText: '',
    },
  ];
}
