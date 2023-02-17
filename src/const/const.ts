export enum ActionType {
  LoadTree = 'TREE/LOAD_TREE',
  AddTree = 'TREE/ADD_TREE',
  ClearAddTree = 'TREE/CLEAR_ADD_TREE',
  RenameTree = 'TREE/RENAME_TREE',
  ClearRenameTree = 'TREE/CLEAR_RENAME_TREE',
  DeleteTree = 'TREE/DELETE_TREE',
  ClearDeleteTree = 'TREE/CLEAR_DELETE_TREE',
  SelectNode = 'TREE/SELECT_NODE',
  RedirectToRoute = 'USER/REDIRECT',
}

export const AppRoute = {
  ROOT: '/',
};

export const APIRoute = {
  TREE: 'api.user.tree.get',
  TREE_ADD: 'api.user.tree.node.create',
  TREE_RENAME: 'api.user.tree.node.rename',
  TREE_DELETE: 'api.user.tree.node.delete',
};

export const TREE_NAME = 'MyTree';