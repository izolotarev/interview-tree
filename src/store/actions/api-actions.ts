import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const/const';
import { ThunkActionResult, TreeType } from '../../types/types';
import { addTreeAction, deleteTreeAction, loadTreeAction, renameTreeAction } from './actions';

export const fetchTree = (treeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<TreeType>(`${APIRoute.TREE}?treeName=${treeName}`);
      dispatch(loadTreeAction(data));
    } catch (error) {
      handleError(error);
    }
  };

export const addTree = (treeName: string, parentNodeId: number, nodeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post(`${APIRoute.TREE_ADD}?treeName=${treeName}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`);
      dispatch(addTreeAction());
    } catch (error) {
      handleError(error);
    }
  };

export const renameTree = (treeName: string, nodeId: number, newNodeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post(`${APIRoute.TREE_RENAME}?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`);
      dispatch(renameTreeAction());
    } catch (error) {
      handleError(error);
    }
  };

export const deleteTree = (treeName: string, nodeId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post(`${APIRoute.TREE_DELETE}?treeName=${treeName}&nodeId=${nodeId}`);
      dispatch(deleteTreeAction());
    } catch (error) {
      handleError(error);
    }
  };

const handleError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    const error = err as AxiosError;
    toast.info(error.response?.data.data.message);
  }
};