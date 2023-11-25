import { makeAutoObservable } from "mobx";
import React, { useContext } from "react";

export default class MainStore {
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Menu
   */
  activeMenu: boolean = false;

  toggleMenu = () => {
    this.activeMenu = !this.activeMenu;
  };
}

export const MainStoreContext = React.createContext<MainStore>(
  null as unknown as MainStore
);

export const useMainStore = () => useContext(MainStoreContext);
