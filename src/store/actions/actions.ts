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
)