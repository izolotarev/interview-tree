import { State, TreeType } from '../../../types/types';
import { NameSpace } from '../root-reducer';

export const getTree = (state: State): TreeType | undefined => state[NameSpace.tree].tree;
export const getTreeLoadedStatus = (state: State): boolean => state[NameSpace.tree].treeLoaded;
export const getSelectedId = (state: State): number | undefined => state[NameSpace.tree].selectedId;