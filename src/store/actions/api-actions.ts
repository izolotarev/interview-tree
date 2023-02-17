import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const/const';
import { ThunkActionResult, TreeType } from '../../types/types';
import { loadTreeAction, renameTreeAction } from './actions';

export const fetchTree = (treeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<TreeType>(`${APIRoute.TREE}?treeName=${treeName}`);
      dispatch(loadTreeAction(data));
    } catch (error) {
      handleError(error);
    }
  };


export const renameTree = (treeName: string, nodeId: number, newNodeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post<TreeType>(`${APIRoute.TREE_RENAME}?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`);
      dispatch(renameTreeAction());
    } catch (error) {
      handleError(error);
    }
  };

const handleError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    const error = err as AxiosError;
    toast.info(error.message);
  }
};