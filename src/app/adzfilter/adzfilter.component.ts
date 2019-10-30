import { ADZDataServiceService } from "./../shared/ADZdata-service.service";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "./../shared/AdzBookModel";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import * as fromGlobalStore from "../shared/globalStore/ADZapp.reducer";
import * as BooksActions from "../ADZbooklist/ADZstore/ADZbooks.actions";

@Component({
  selector: "ADZfilter",
  templateUrl: "./adzfilter.component.html",
  styleUrls: ["./adzfilter.component.css"]
})
export class ADZfilterComponent implements OnInit {
  Filterby = new FormControl("", [
    Validators.pattern("^authors|^category|^language]")
  ]);

  private books;
  private filters: [];
  private filterdBooks: [];
  private filterbyThis;

  constructor(
    private store: Store<fromGlobalStore.AppState>,
    private data: ADZDataServiceService
  ) {}

  ngOnInit() {
    this.store.select("booklist").subscribe(books => {
      this.books = books.books;
    });
  }

  ADZfilterBooks(x = this.Filterby) {
    console.log(this.Filterby);
    console.log(this.books);
    console.log(this.Filterby.value);

    this.filters = this.books.map(book => book[this.Filterby.value]);
  }
  ADZUpdateBooks() {


    let updatedBooks = this.books.filter(
      book => book[this.Filterby.value] == this.filterbyThis
    );
    this.store.dispatch(new BooksActions.GetBooks(updatedBooks));
    // here i update the store ; i could add antoher state  so we can conserve the initial books we fetched
    //but due to deadline issues i couldnt finish it
  }

  ADZClearFilter() {
    this.store.dispatch(new BooksActions.FetchBooks(this.data.searchedValue));
    this.filters = [];
    this.filterdBooks = [];
    this.filterbyThis = null;
    this.Filterby.reset();
  }
}
