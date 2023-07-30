import { create } from 'zustand'

interface MenuProps{
  isOpen:boolean
  onOpen:()=>void
  onClose:()=>void
}

const menuProvider = create <MenuProps>((set) => ({
  isOpen: false,
  onOpen: () => set(({ isOpen: true})),
  onClose: () => set({ isOpen: false }),
}))

export default menuProvider