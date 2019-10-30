
import { Store } from '@ngrx/store';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { ADZDataServiceService } from '../shared/ADZdata-service.service';
import * as fromGlobalStore from '../shared/globalStore/ADZapp.reducer';
import * as BooksActions from "../ADZbooklist/ADZstore/ADZbooks.actions";

@Component({
  selector: 'ADZ-input-bar',
  templateUrl: './ADZinput-bar.component.html',
  styleUrls: ['./ADZinput-bar.component.css']
})
export class ADZInputBarComponent implements OnInit {


  value = '';

  constructor(private router: Router, private data: ADZDataServiceService,private store:Store<fromGlobalStore.AppState>) {
  }

  ngOnInit() {
  }

  adzOnSearch() {
    this.store.dispatch(new BooksActions.FetchBooks(this.value))
    this.router.navigateByUrl('/result');
  }

}
