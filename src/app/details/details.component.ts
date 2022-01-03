import { Component, OnInit, Output , EventEmitter} from '@angular/core';
// import {colorsClass} from '../models/colors'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    colors1 = "unset";
    colors2 = "unset";
    colors3 = "unset";
    colors4 = "unset";
    colors5 = "unset";
  bestratings = "";
  @Output() bestrating: EventEmitter<string> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }
  getClickedElement1(){
    if(this.colors1 != "orangered"){
      this.colors1 = "orangered";
    this.colors2 = "unset";
    this.colors3 = "unset";
    this.colors4 = "unset";
    this.colors5 = "unset";
    this.bestratings = "unset";
    }else{
      this.colors1 = "black";
    this.colors2 = "unset";
    this.colors3 = "unset";
    this.colors4 = "unset";
    this.colors5 = "unset";
    this.bestratings = "unset";
    }

  }
  getClickedElement2(){
    if(this.colors2 != "orangered"){
      this.colors1 = "orangered";
      this.colors2 = "orangered";
      this.colors3 = "unset";
      this.colors4 = "unset";
      this.colors5 = "unset";
      this.bestratings = "unset";
    }else{
      this.colors1 = "black";
      this.colors2 = "black";
      this.colors3 = "unset";
      this.colors4 = "unset";
      this.colors5 = "unset";
      this.bestratings = "unset";
    }
  }
  getClickedElement3(){
    if(this.colors3 != "orangered"){
      this.colors1 = "orangered";
      this.colors2 = "orangered";
      this.colors3 = "orangered";
      this.colors4 = "unset";
      this.colors5 = "unset";
      this.bestratings = "unset";
    }else{
        this.colors1 = "black";
      this.colors2 = "black";
      this.colors3 = "black";
      this.colors4 = "unset";
      this.colors5 = "unset";
      this.bestratings = "unset";
    }
  }
  getClickedElement4(){
    if(this.colors4 != "orangered"){
      this.colors1 = "orangered";
    this.colors2 = "orangered";
    this.colors3 = "orangered";
    this.colors4 = "orangered";
    this.colors5 = "unset";
    this.bestratings = "white";
    }else{
      this.colors1 = "black";
    this.colors2 = "black";
    this.colors3 = "black";
    this.colors4 = "black";
    this.colors5 = "unset";
    this.bestratings = "white";
    }
  }
  getClickedElement5(){
   if(this.colors5 != "orangered"){
    this.colors1 = "orangered";
    this.colors2 = "orangered";
    this.colors3 = "orangered";
    this.colors4 = "orangered";
    this.colors5 = "orangered";
    this.bestratings = "gainsboro";
    this.bestrating.emit(this.bestratings)
   }else{
    this.colors1 = "black";
    this.colors2 = "black";
    this.colors3 = "black";
    this.colors4 = "black";
    this.colors5 = "black";
    this.bestratings = "white";
   }
   
  }
}
