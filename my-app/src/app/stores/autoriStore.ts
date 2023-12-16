import { action, makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { AutoriModel } from "../models/AutoriModel";

export default class AutoriStore {
  autoriRegistry = new Map<number, AutoriModel>();
  selectedAutori: AutoriModel | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  //sorting prej autorit me te ri
  get autoretByViti() {
    return Array.from(this.autoriRegistry.values()).sort(
      (a, b) => b.vitiLindjes - a.vitiLindjes
    );
  }

  //funksion per VIEW(READ)
  loadAutoret = async () => {
    this.loadingInitial=true;
    try {
      const autoret = await agent.Autoret.list();
      autoret.forEach((autori) => {
        this.setAutori(autori);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);

      console.log(error);
    }
  };

  loadAutori = async (id: number) => {
    let autori = this.getAutori(id);
    if (autori) {
      this.selectedAutori = autori;
      return autori;
    } else {
      this.loadingInitial = true;
      try {
        autori = await agent.Autoret.details(id);
        this.setAutori(autori);
        runInAction(()=>{
          this.selectedAutori=(autori);
        })
        this.setLoadingInitial(false);
        return autori;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  private setAutori = (autori: AutoriModel) => {
    this.autoriRegistry.set(autori.id, autori);
  };

  private getAutori = (id: number) => {
    return this.autoriRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  //funksion per CREATE
  createAutori = async (autori: AutoriModel) => {
    this.loading = true;
    try {
      await agent.Autoret.create(autori);
      runInAction(() => {
        this.autoriRegistry.set(autori.id, autori);
        this.selectedAutori = autori;
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
  updateAutori = async (autori: AutoriModel) => {
    this.loading = true;
    try {
      await agent.Autoret.update(autori);
      runInAction(() => {
        this.autoriRegistry.set(autori.id, autori);
        this.selectedAutori = autori;
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
  deleteAutori = async (id: number) => {
    this.loading = true;
    try {
      await agent.Autoret.delete(id);
      runInAction(() => {
        this.autoriRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
