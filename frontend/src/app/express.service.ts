import { Component, OnInit } from '@angular/core';
import { HandlerService } from './handler.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
})
export class expressService implements OnInit {

  constructor(private Handler: HandlerService) { }

  ngOnInit() {
      this.Handler.getData().subscribe(data =>{
        console.log(data)
      })
  }
}
