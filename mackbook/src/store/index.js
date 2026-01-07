// state management (Zustand) that is commonly used with Three.js / React Three Fiber projects.
import {create} from "zustand";

const useMacbookStore = create((set) => ({
    color: '#2e2c2c',
    setColor: (color) => set ({ color }),

    scale: 0.08,
    setScale: (scale) => set ({ scale }),

    reset: () => set({ color: '#2e2c3e', scale: 0.08}),
}))

export default useMacbookStore;