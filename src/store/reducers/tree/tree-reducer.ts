import { createReducer } from '@reduxjs/toolkit';
import { TreeState } from '../../../types/types';
import { loadTreeAction, selectNodeAction } from '../../actions/actions';

export const initialState: TreeState = {
  tree: undefined,
  treeLoaded: false,
  selectedId: undefined,
};

export const treeData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTreeAction, (state, action) => {
      state.tree = action.payload.tree;
      state.treeLoaded = true;
    })
    .addCase(selectNodeAction, (state, action) => {
      state.selectedId = action.payload.id;
    })
});
