import { Book } from "../shared/AdzBookModel";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription} from "rxjs"
import * as fromGlobalStore from '../shared/globalStore/ADZapp.reducer';

@Component({
  selector: "ADZ-booklist",
  templateUrl: "./ADZbooklist.component.html",
  styleUrls: ["./ADZbooklist.component.css"]
})
export class ADZBooklistComponent implements OnInit {
  //books: Observable<{ books: Book[] }>;
  books:Book[];
  subscription:Subscription;

  constructor(private store: Store<fromGlobalStore.AppState>) {}

  ngOnInit() {
    this.store.select("booklist").subscribe((books)=>{this.books=books.books})
  }

}
