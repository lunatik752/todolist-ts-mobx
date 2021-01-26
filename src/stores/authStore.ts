import { action, makeObservable, observable, runInAction } from "mobx";

export class AuthStore {
  isAuthorized: boolean = false;
  isLoading: boolean = true;

  constructor() {
    makeObservable(this, {
      isAuthorized: observable,
      isLoading: observable,
      init: action,
    });
  }

  init() {

    this.isLoading = true;

    this.isAuthorized = false;

    setTimeout(() => {
      runInAction(() => (this.isLoading = false));
    }, 1000);
  }
}
