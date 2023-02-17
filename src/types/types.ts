import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootState } from '../store/reducers/root-reducer';


export type TreeState = {
  tree: TreeType | undefined;
  treeLoaded: boolean;
  selectedId?: number;
  addSuccess: boolean;
  renameSuccess: boolean;
  deleteSuccess: boolean;
}

export type State = RootState;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type TreeType = {
  id: number,
  name: string,
  children: TreeType[],
}