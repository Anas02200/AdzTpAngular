import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ADZreturn',
  templateUrl: './adz-return.component.html',
  styleUrls: ['./adz-return.component.css']
})
export class AdzReturnComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  adzOnReturn(){

      this.router.navigateByUrl('/');

  }

}
