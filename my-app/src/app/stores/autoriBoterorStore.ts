import { action, makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { AutoriBoterorModel } from "../models/AutoriBoterorModel";

export default class AutoriBoterorStore {
  autoriBoterorRegistry = new Map<number, AutoriBoterorModel>();
  selectedAutoriBoteror: AutoriBoterorModel | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  //sorting prej autorit me te ri
  get autoretBoterorByViti() {
    return Array.from(this.autoriBoterorRegistry.values()).sort(
      (a, b) => b.id - a.id
    );
  }

  //funksion per VIEW(READ)
  loadAutoretBoteror = async () => {
    this.loadingInitial=true;
    try {
      const autoretBoteror = await agent.AutoriBoteror.list();
      autoretBoteror.forEach((autoriBoteror) => {
        this.setAutoriBoteror(autoriBoteror);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);

      console.log(error);
    }
  };

  loadAutoriBoteror = async (id: number) => {
    let autoriBoteror = this.getAutoriBoteror(id);
    if (autoriBoteror) {
      this.selectedAutoriBoteror = autoriBoteror;
      return autoriBoteror;
    } else {
      this.loadingInitial = true;
      try {
        autoriBoteror = await agent.AutoriBoteror.details(id);
        this.setAutoriBoteror(autoriBoteror);
        runInAction(()=>{
          this.selectedAutoriBoteror=(autoriBoteror);
        })
        this.setLoadingInitial(false);
        return autoriBoteror;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };


  private setAutoriBoteror = (autoriBoteror: AutoriBoterorModel) => {
    this.autoriBoterorRegistry.set(autoriBoteror.id, autoriBoteror);
  };

  private getAutoriBoteror = (id: number) => {
    return this.autoriBoterorRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  //funksion per CREATE
  createAutoriBoteror = async (autoriBoteror: AutoriBoterorModel) => {
    this.loading = true;
    try {
      await agent.AutoriBoteror.create(autoriBoteror);
      runInAction(() => {
        this.autoriBoterorRegistry.set(autoriBoteror.id, autoriBoteror);
        this.selectedAutoriBoteror = autoriBoteror;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  //funksion per UPDATE(EDIT)
  updateAutoriBoteror = async (autoriBoteror: AutoriBoterorModel) => {
    this.loading = true;
    try {
      await agent.AutoriBoteror.update(autoriBoteror);
      runInAction(() => {
        this.autoriBoterorRegistry.set(autoriBoteror.id, autoriBoteror);
        this.selectedAutoriBoteror = autoriBoteror;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  //funksion per DELETE
  deleteAutoriBoteror = async (id: number) => {
    this.loading = true;
    try {
      await agent.AutoriBoteror.delete(id);
      runInAction(() => {
        this.autoriBoterorRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
