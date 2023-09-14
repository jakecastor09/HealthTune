import { create } from 'zustand';
type State = {
  isMenuOpen: boolean;
};
type Action = {
  toggleMenu: () => void;
};
const useMenuStore = create<State & Action>(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useMenuStore;
