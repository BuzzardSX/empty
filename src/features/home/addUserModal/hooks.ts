import { useAppSelector } from '~/app';
import { selectUserModalOpen } from '../homeSlice';

export const useOpen = () => useAppSelector(selectUserModalOpen);
