import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from 'redux/store';

import * as employeeActions from './actions';

export const useEmployee = () => {
  const dispatch = useAppDispatch();

  const employeeState = useSelector((state: RootState) => state.employee);

  const getEmployeeData = useCallback(() => {
    dispatch(employeeActions.getEmployeeData());
  }, [dispatch]);

  return {
    ...employeeState,
    getEmployeeData,
  };
};
