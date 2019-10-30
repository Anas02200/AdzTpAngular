import { Book } from '../../shared/AdzBookModel';

import * as BooksActions from "./ADZbooks.actions";

export interface State{
  books:Book[];
  //if we expand the state we can add more to the interface
}

const initialState:State = {
  books: []
};

export function booklistReducer(
  state = initialState,
  action: BooksActions.GetBooks
) {
  switch (action.type) {
    case BooksActions.GET_BOOKS:
     // const book=new Book(action.payload.)
      return {...state , books: [...action.payload] };
    default:
      return { ...state };
  }
}
