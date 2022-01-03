import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})


export class QuotesComponent implements OnInit {

  @Input() postdata : any;
  date = new Date();
  
  bestratingsc: any;
  default = "orangered";
  bgdefault = "gainsboro"
  completed = false;
  randomids:any = Math.floor((Math.random()*78) + 1);
  constructor() { }

  ngOnInit(): void {
  }

  
  deleteItem(id:number){
    // this.postdata = this.postdata.filter((i:any) => i != id);
    this.postdata.splice(id,1)
  }
}
