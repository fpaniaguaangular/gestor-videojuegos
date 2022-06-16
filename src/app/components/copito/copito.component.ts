import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copito',
  templateUrl: './copito.component.html',
  styleUrls: ['./copito.component.css']
})
export class CopitoComponent implements OnInit {
  x:number=Math.random()*screen.width;
  y:number=-100;
  speed:number = Math.random()*100;

  posicionadorCopito:any = {
    position:"absolute",
    left: `${this.x}px`,
    top: `${this.y}px`
  }

  constructor() { 
    setInterval(()=>{
      this.y=this.y+1;
      if (this.y > screen.height) {
        this.y=0;
        this.x = Math.random()*screen.width;
      }
      this.posicionadorCopito.top = `${this.y}px`;
      this.posicionadorCopito.left = `${this.x}px`;
    },this.speed);
  }

  ngOnInit(): void {
  }

}
