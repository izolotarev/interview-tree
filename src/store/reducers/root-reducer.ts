import { combineReducers } from '@reduxjs/toolkit';
import { treeData } from './tree/tree-reducer';


export enum NameSpace {
  tree = 'TREE',
}

export const rootReducer = combineReducers({
  [NameSpace.tree]: treeData,
});

export type RootState = ReturnType<typeof rootReducer>;