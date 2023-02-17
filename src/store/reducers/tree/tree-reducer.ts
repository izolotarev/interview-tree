import { createReducer } from '@reduxjs/toolkit';
import { TreeState } from '../../../types/types';
import { addTreeAction, clearAddTreeAction, clearDeleteTreeAction, clearRenameTreeAction, deleteTreeAction, loadTreeAction, renameTreeAction, selectNodeAction } from '../../actions/actions';

export const initialState: TreeState = {
  tree: undefined,
  treeLoaded: false,
  selectedId: undefined,
  addSuccess: false,
  renameSuccess: false,
  deleteSuccess: false,
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
    .addCase(addTreeAction, (state, action) => {
      state.addSuccess = true;
    })
    .addCase(clearAddTreeAction, (state, action) => {
      state.addSuccess = initialState.addSuccess;
    })
    .addCase(renameTreeAction, (state, action) => {
      state.renameSuccess = true;
    })
    .addCase(clearRenameTreeAction, (state, action) => {
      state.renameSuccess = initialState.renameSuccess;
    })
    .addCase(deleteTreeAction, (state, action) => {
      state.deleteSuccess = true;
    })
    .addCase(clearDeleteTreeAction, (state, action) => {
      state.deleteSuccess = initialState.deleteSuccess;
    });
});
