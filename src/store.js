import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = create((set) => ({}));

store = devtools(store);
store = persist(store);

const useStore = create(store);

export default useStore;
