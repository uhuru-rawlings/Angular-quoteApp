import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  authorName = "";
  postBy = "";
  addedQuote = "";
  
  allData:any =  [];
  constructor() { }

  ngOnInit(): void {
  }
  getValues(forms:NgForm){
   if(this.authorName == "" || this.addedQuote == "" || this.postBy ==""){
     return alert("Please fill all fields");
   }else{
    this.allData.push({ author:this.authorName,postb:this.postBy, quote:this.addedQuote});
    // console.log(this.allData);
    // this.authorName = "";
    //  this.postBy = "";
    //  this.addedQuote = "";
    forms.reset()
   }
  }
}

function forms(forms: any) {
  throw new Error('Function not implemented.');
}
// export var quotes = [{author: authorName}]
