import { State, TreeType } from '../../../types/types';
import { NameSpace } from '../root-reducer';

export const getTree = (state: State): TreeType | undefined => state[NameSpace.tree].tree;
export const getTreeLoadedStatus = (state: State): boolean => state[NameSpace.tree].treeLoaded;
export const getSelectedId = (state: State): number | undefined => state[NameSpace.tree].selectedId;
export const getRootId = (state: State): number | undefined => state[NameSpace.tree].tree?.id;
export const getRootName = (state: State): string | undefined => state[NameSpace.tree].tree?.name;
export const getAddSuccess = (state: State): boolean => state[NameSpace.tree].addSuccess;
export const getRenameSuccess = (state: State): boolean => state[NameSpace.tree].renameSuccess;