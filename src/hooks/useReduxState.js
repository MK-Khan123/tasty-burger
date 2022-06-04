import { useContext } from 'react';
import { ReduxContext } from '../contexts/ReduxProvider';

const useReduxState = () => useContext(ReduxContext);

export default useReduxState;