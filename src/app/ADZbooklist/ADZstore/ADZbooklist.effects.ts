import { Store } from "@ngrx/store";
import { Book } from "../../shared/AdzBookModel";
import { HttpClient } from "@angular/common/http";
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as BooksActions from "./ADZbooks.actions";
import { switchMap, map, mergeMap } from "rxjs/operators";

import { Injectable } from "@angular/core";

@Injectable()
export class ADZBookEffect {
  @Effect()
  fetchBook = this.actions
    .pipe(
      ofType(BooksActions.FETCH_BOOKS),
      switchMap(
        (fbook: BooksActions.FetchBooks) => {
           return this.http
          .get("https://www.googleapis.com/books/v1/volumes?q=" + fbook.payload)
          .pipe(
            map(resp => {
              let books: Book[] = [];
              for (let key in resp["items"]) {
                console.log(resp["items"][key].accessInfo);
                let bookItem = new Book(
                  resp["items"][key].accessInfo.webReaderLink,
                  resp["items"][key].id,
                  resp["items"][key].saleInfo.saleability,
                  resp["items"][key].volumeInfo.authors,
                  resp["items"][key].volumeInfo.categories,
                  resp["items"][key].volumeInfo.imageLinks.thumbnail,
                  resp["items"][key].volumeInfo.language,
                  resp["items"][key].volumeInfo.maturityRating,
                  resp["items"][key].volumeInfo.pageCount,
                  resp["items"][key].volumeInfo.publishedDate,
                  resp["items"][key].volumeInfo.title
                );
                books = [...books, bookItem];
              }
              return new BooksActions.GetBooks(books);
            })
          )
      })

    )

  constructor(
    private actions: Actions,
    private http: HttpClient,
  ) {}
}
