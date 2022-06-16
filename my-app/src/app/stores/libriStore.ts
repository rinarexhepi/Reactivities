import { action, makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
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
    try {
      const librat = await agent.Librat.list();
      librat.forEach((libri) => {
        this.libriRegistry.set(libri.id, libri);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);

      console.log(error);
    }
  };


  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };


  //funksion qe shkon ne LibriList per me mujt me bo select
  selectLibri = (id: number) => {
    this.selectedLibri = this.libriRegistry.get(id);
  };


  //funksion qe  mirret me rastin kur klikojme cancel
  cancelSelectedLibri = () => {
    this.selectedLibri = undefined;
  };


  //funksion qe e hap formen nese klikojme qofte per edit apo per create
  openForm = (id?: number) => {
    id ? this.selectLibri(id) : this.cancelSelectedLibri();
    this.editMode = true;
  };


  //funksion qe kur tklikojme cancel, forma mbyllet
  closeForm = () => {
    this.editMode = false;
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

        if (this.selectedLibri?.id === id) this.cancelSelectedLibri();
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
