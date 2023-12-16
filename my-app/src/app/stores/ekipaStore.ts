import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { EkipaModel } from "../models/EkipaModel";

export default class EkipaStore{
    ekipaRegistry = new Map<number, EkipaModel>();
    selectedEkipa: EkipaModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get ekipaByPozita() {
      return Array.from(this.ekipaRegistry.values()).sort(
        (a, b) => a.pozita.localeCompare(b.pozita)
      );
    }

    loadEkipa = async () => {
        this.loadingInitial=true;
        try {
          const team = await agent.Ekipa.list();
          team.forEach((ekipa) => {
            this.setEkipa(ekipa);
          });
    
          this.setLoadingInitial(false);
        } catch (error) {
          this.setLoadingInitial(false);
    
          console.log(error);
        }
    };

    loadTeam = async (id: number) => {
        let ekipa = this.getEkipa(id);
        if (ekipa) {
          this.selectedEkipa = ekipa;
          return ekipa;
        } else {
          this.loadingInitial = true;
          try {
            ekipa = await agent.Ekipa.details(id);
            this.setEkipa(ekipa);
            runInAction(()=>{
              this.selectedEkipa=(ekipa);
            })
            this.setLoadingInitial(false);
            return ekipa;
          } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
          }
        }
    };

    private setEkipa = (ekipa: EkipaModel) => {
        this.ekipaRegistry.set(ekipa.id, ekipa);
      };
    
      private getEkipa = (id: number) => {
        return this.ekipaRegistry.get(id);
      };
    
      setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    createEkipa = async (ekipa: EkipaModel) => {
        this.loading = true;
        try {
          await agent.Ekipa.create(ekipa);
          runInAction(() => {
            this.ekipaRegistry.set(ekipa.id, ekipa);
            this.selectedEkipa = ekipa;
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

    updateEkipa = async (ekipa: EkipaModel) => {
        this.loading = true;
        try {
          await agent.Ekipa.update(ekipa);
          runInAction(() => {
            this.ekipaRegistry.set(ekipa.id, ekipa);
            this.selectedEkipa = ekipa;
            this.editMode = false;
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
    };


    deleteEkipa = async (id: number) => {
        this.loading = true;
        try {
          await agent.Ekipa.delete(id);
          runInAction(() => {
            this.ekipaRegistry.delete(id);
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
      };
    


    
    




}