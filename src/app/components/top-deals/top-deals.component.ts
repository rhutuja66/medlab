import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {

  topDeals:any[] = []
 constructor(private http:HttpService) { }
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

  ngOnInit(): void {
    this.getTopdealList()
  }

  getTopdealList() {
    this.http.getDetailsFromServer("top-deals").subscribe((data: any) => {
      if (data && data.length > 0) {
        this.topDeals = data
      }
    },
    );
  }

}
