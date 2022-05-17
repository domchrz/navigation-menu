import { useContext } from 'react';
import { SubmenuContext } from '../context/Submenu';

export default function useSubmenu() {
  const context = useContext(SubmenuContext);
  return context;
}
