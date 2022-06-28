import { action, makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { LibriModel } from "../models/LibriModel";

export default class LibriStore {
  libriRegistry = new Map<number, LibriModel>();
  selectedLibri: LibriModel | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  //sorting prej librit me te ri
  get libratByViti() {
    return Array.from(this.libriRegistry.values()).sort(
      (a, b) => b.viti_Publikimit - a.viti_Publikimit
    );
  }

  //funksion per VIEW(READ)
  loadLibrat = async () => {
    this.loadingInitial=true;
    try {
      const librat = await agent.Librat.list();
      librat.forEach((libri) => {
        this.setLibri(libri);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);

      console.log(error);
    }
  };

  loadLibri = async (id: number) => {
    let libri = this.getLibri(id);
    if (libri) {
      this.selectedLibri = libri;
      return libri;
    } else {
      this.loadingInitial = true;
      try {
        libri = await agent.Librat.details(id);
        this.setLibri(libri);
        runInAction(()=>{
          this.selectedLibri=(libri);
        })
        this.setLoadingInitial(false);
        return libri;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  private setLibri = (libri: LibriModel) => {
    this.libriRegistry.set(libri.id, libri);
  };

  private getLibri = (id: number) => {
    return this.libriRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  //funksion per CREATE
  createLibri = async (libri: LibriModel) => {
    this.loading = true;
    try {
      await agent.Librat.create(libri);
      runInAction(() => {
        this.libriRegistry.set(libri.id, libri);
        this.selectedLibri = libri;
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
  updateLibri = async (libri: LibriModel) => {
    this.loading = true;
    try {
      await agent.Librat.update(libri);
      runInAction(() => {
        this.libriRegistry.set(libri.id, libri);
        this.selectedLibri = libri;
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
  deleteLibri = async (id: number) => {
    this.loading = true;
    try {
      await agent.Librat.delete(id);
      runInAction(() => {
        this.libriRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
