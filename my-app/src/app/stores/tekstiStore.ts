import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { TekstiModel } from "../models/TekstiModel";

export default class TekstiStore {
    tekstiRegistry = new Map<number, TekstiModel>();
    selectedTeksti: TekstiModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;
  
    constructor() {
      makeAutoObservable(this);
    }
  
    //sorting prej tekstit me te ri
    get tekstetByViti() {
      return Array.from(this.tekstiRegistry.values()).sort(
        (a, b) => b.viti_Publikimit - a.viti_Publikimit
      );
    }
  
    //funksion per VIEW(READ)
    loadTekstet = async () => {
      this.loadingInitial=true;
      try {
        const tekstet = await agent.Tekstet.list();
        tekstet.forEach((teksti) => {
          this.setTeksti(teksti);
        });
  
        this.setLoadingInitial(false);
      } catch (error) {
        this.setLoadingInitial(false);
  
        console.log(error);
      }
    };
  
    loadTeksti = async (id: number) => {
      let teksti = this.getTeksti(id);
      if (teksti) {
        this.selectedTeksti = teksti;
        return teksti;
      } else {
        this.loadingInitial = true;
        try {
          teksti = await agent.Tekstet.details(id);
          this.setTeksti(teksti);
          runInAction(()=>{
            this.selectedTeksti=(teksti);
          })
          this.setLoadingInitial(false);
          return teksti;
        } catch (error) {
          console.log(error);
          this.setLoadingInitial(false);
        }
      }
    };
  
    private setTeksti = (teksti: TekstiModel) => {
      this.tekstiRegistry.set(teksti.id, teksti);
    };
  
    private getTeksti = (id: number) => {
      return this.tekstiRegistry.get(id);
    };
  
    setLoadingInitial = (state: boolean) => {
      this.loadingInitial = state;
    };
  
    //funksion per CREATE
    createTeksti = async (teksti: TekstiModel) => {
      this.loading = true;
      try {
        await agent.Tekstet.create(teksti);
        runInAction(() => {
          this.tekstiRegistry.set(teksti.id, teksti);
          this.selectedTeksti = teksti;
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
    updateTeksti = async (teksti: TekstiModel) => {
      this.loading = true;
      try {
        await agent.Tekstet.update(teksti);
        runInAction(() => {
          this.tekstiRegistry.set(teksti.id, teksti);
          this.selectedTeksti = teksti;
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
    deleteTeksti = async (id: number) => {
      this.loading = true;
      try {
        await agent.Tekstet.delete(id);
        runInAction(() => {
          this.tekstiRegistry.delete(id);
          this.loading = false;
        });
      } catch (error) {
        runInAction(() => {
          this.loading = false;
        });
      }
    };
  }
  