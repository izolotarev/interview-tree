import { useEffect } from 'react';
import { TREE_NAME } from '../const/const';
import { clearAddTreeAction, clearDeleteTreeAction, clearRenameTreeAction } from '../store/actions/actions';
import { fetchTree } from '../store/actions/api-actions';
import { TreeOperation } from '../types/types';
import { useAppDispatch } from './hooks';

export const useUpdateTreeOn = (success: boolean, operation: TreeOperation) => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      dispatch(fetchTree(TREE_NAME));
      switch(operation) {
        case TreeOperation.Add:
          dispatch(clearAddTreeAction());
          break;
        case TreeOperation.Rename:
          dispatch(clearRenameTreeAction());
          break;
        case TreeOperation.Delete:
          dispatch(clearDeleteTreeAction());
          break;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])
}

