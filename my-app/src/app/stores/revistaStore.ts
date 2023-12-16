import { action, makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { RevistaModel } from "../models/RevistaModel";

export default class RevistaStore {
  revistaRegistry = new Map<number, RevistaModel>();
  selectedRevista: RevistaModel | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  //sorting prej revistat me te ri
  get revistatByViti() {
    return Array.from(this.revistaRegistry.values()).sort(
      (a, b) => b.viti_Publikimit - a.viti_Publikimit
    );
  }

  //funksion per VIEW(READ)
  loadRevistat = async () => {
    this.loadingInitial=true;
    try {
      const revistat = await agent.Revistat.list();
      revistat.forEach((revista) => {
        this.setRevista(revista);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);

      console.log(error);
    }
  };

  loadRevista = async (id: number) => {
    let revista = this.getRevista(id);
    if (revista) {
      this.selectedRevista = revista;
      return revista;
    } else {
      this.loadingInitial = true;
      try {
        revista = await agent.Revistat.details(id);
        this.setRevista(revista);
        runInAction(()=>{
          this.selectedRevista=(revista);
        })
        this.setLoadingInitial(false);
        return revista;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  private setRevista = (revista: RevistaModel) => {
    this.revistaRegistry.set(revista.id, revista);
  };

  private getRevista = (id: number) => {
    return this.revistaRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  //funksion per CREATE
  createRevista = async (revista: RevistaModel) => {
    this.loading = true;
    try {
      await agent.Revistat.create(revista);
      runInAction(() => {
        this.revistaRegistry.set(revista.id, revista);
        this.selectedRevista = revista;
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
  updateRevista = async (revista: RevistaModel) => {
    this.loading = true;
    try {
      await agent.Revistat.update(revista);
      runInAction(() => {
        this.revistaRegistry.set(revista.id, revista);
        this.selectedRevista = revista;
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
  deleteRevista = async (id: number) => {
    this.loading = true;
    try {
      await agent.Revistat.delete(id);
      runInAction(() => {
        this.revistaRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
