import { useSelector } from 'react-redux';
import { selectUserModalOpen } from '../homeSlice';

export const useOpen = () => useSelector(selectUserModalOpen);
