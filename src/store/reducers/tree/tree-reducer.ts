import { createReducer } from '@reduxjs/toolkit';
import { TreeState } from '../../../types/types';
import { loadTreeAction } from '../../actions/actions';

export const initialState: TreeState = {
  tree: undefined,
  treeLoaded: false,
};

export const treeData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTreeAction, (state, action) => {
      state.tree = action.payload.tree;
      state.treeLoaded = true;
    })
});
