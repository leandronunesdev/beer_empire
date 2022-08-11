import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

// using the any type instead of AppDispatch due to TS2345 error
const useAppDispatch = () => useDispatch<any>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const hooks = { useAppDispatch, useAppSelector };
export default hooks;
