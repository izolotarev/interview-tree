import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const/const';
import { ThunkActionResult, TreeType } from '../../types/types';
import { loadTreeAction } from './actions';

export const fetchTree = (treeName: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<TreeType>(`${APIRoute.TREE}?treeName=${treeName}`);
      dispatch(loadTreeAction(data));
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