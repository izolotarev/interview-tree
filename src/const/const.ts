export enum ActionType {
  LoadTree = 'TREE/LOAD_TREE',
  RenameTree = 'TREE/RENAME_TREE',
  ClearRenameTree = 'TREE/CLEAR_RENAME_TREE',
  SelectNode = 'TREE/SELECT_NODE',
  RedirectToRoute = 'USER/REDIRECT',
}

export const AppRoute = {
  ROOT: '/',
};

export const APIRoute = {
  TREE: 'api.user.tree.get',
  TREE_RENAME: 'api.user.tree.node.rename',
};