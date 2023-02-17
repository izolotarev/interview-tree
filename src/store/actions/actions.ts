import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../const/const';
import { TreeType } from '../../types/types';

export const loadTreeAction = createAction(
  ActionType.LoadTree,
  (tree: TreeType) => ({
    payload: {
      tree
    }
  })
);

export const addTreeAction = createAction(ActionType.AddTree);
export const clearAddTreeAction = createAction(ActionType.ClearAddTree);
export const renameTreeAction = createAction(ActionType.RenameTree);
export const clearRenameTreeAction = createAction(ActionType.ClearRenameTree);

export const selectNodeAction = createAction(
  ActionType.SelectNode,
  (id: number) => ({
    payload: {
      id
    }
  })
);