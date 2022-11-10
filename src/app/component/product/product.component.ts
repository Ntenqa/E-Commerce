import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any;
  public filterCategory:any;
  searchKey:string="";
  constructor(private api : ApiService, private cartService :CartService) {}

  ngOnInit(): void {
    this.getProducts()
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey=val;
      })
    }
  
  getProducts(){
    this.api.getProduct()
    .subscribe(data => {
      this.productList = data
      console.log(data)
      this.productList.forEach((a:any) => {
        // if(a.category ==="solar panels"){
        //   a.category="solar panels"
        // }
        Object.assign(a,{quantity:1,total:a.price});
        
      })
    }
      
      
      // this.productList=res;
      // console.log(this.productList)
      // this.filterCategory=res;
      // console.log(this.filterCategory )

      
      );
  }
  addtocart(item:any){
    this.cartService.addtoCart(item)
  }
  getCharger(){
    this.api.getChargers().subscribe(data => {
      this.productList = data
    }
    )
  }
  getSolar(){
    this.api.getPanels().subscribe(data => {
      this.productList = data
    }
    )
  }
  filter(category:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category ==category || category==''){
        return a;
      }
    })
  }
}

