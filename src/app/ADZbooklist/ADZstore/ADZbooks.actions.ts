import { Book } from "../../shared/AdzBookModel";
import { Action } from "@ngrx/store";


export const FETCH_BOOKS = "FETCH_BOOKS";

export const GET_BOOKS = "GET_BOOKS"; //to avoid typos

export class GetBooks implements Action {
  readonly type = GET_BOOKS; //cant get changed from outside
  constructor(public payload: Book[]) {}
}

export class FetchBooks implements Action {
  readonly type = FETCH_BOOKS;
  constructor(public payload: string) {}
}

export type BooksActions = GetBooks | FetchBooks;

// add action for visualizing one
