import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-top-deals-view',
  templateUrl: './top-deals-view.component.html',
  styleUrls: ['./top-deals-view.component.scss']
})
export class TopDealsViewComponent implements OnInit {
  productDetails:any;
  constructor(private route:ActivatedRoute,private http:HttpService) {
    console.log('Hi')
   }

  ngOnInit(): void {
    const drugCode:any = this.route.snapshot.paramMap.get('drug-code');
    if(drugCode != null){
      this.getProductDetailsByDrugCode(drugCode);
    }

  }

  getProductDetailsByDrugCode(drug_code:string){
    const params:HttpParams = new HttpParams()
                              .set('drugCode',drug_code);

    this.http.getDetailsFromServer('top-deals',params).subscribe((response:any)=>{
      if(response && response.length > 0){
        this.productDetails = response[0]
      }
    })

    }

}
