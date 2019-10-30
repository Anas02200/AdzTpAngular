
import * as fromBooklist from '../../ADZbooklist/ADZstore/ADZbooklist.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {

  booklist: fromBooklist.State
  //if we had other modules in the app we can add their state here

}

export const appReducer:ActionReducerMap<AppState>={
  booklist: fromBooklist.booklistReducer,
}
