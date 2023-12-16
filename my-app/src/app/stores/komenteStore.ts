import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { KomenteModel } from "../models/KomenteModel";

export default class KomenteStore{
    KomenteRegistry = new Map<number, KomenteModel>();
    selectedKomente: KomenteModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get komenteById() {
      return Array.from(this.KomenteRegistry.values()).sort(
        (a, b) => b.id - a.id
      );
    }

    loadKomente = async () => {
        this.loadingInitial=true;
        try {
          const comment = await agent.Komente.list();
          comment.forEach((komente) => {
            this.setKomente(komente);
          });
    
          this.setLoadingInitial(false);
        } catch (error) {
          this.setLoadingInitial(false);
    
          console.log(error);
        }
    };

    loadKoment = async (id: number) => {
        let komente = this.getKomente(id);
        if (komente) {
          this.selectedKomente = komente;
          return komente;
        } else {
          this.loadingInitial = true;
          try {
            komente = await agent.Komente.details(id);
            this.setKomente(komente);
            runInAction(()=>{
              this.selectedKomente=(komente);
            })
            this.setLoadingInitial(false);
            return komente;
          } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
          }
        }
    };

    private setKomente = (komente: KomenteModel) => {
        this.KomenteRegistry.set(komente.id, komente);
      };
    
      private getKomente = (id: number) => {
        return this.KomenteRegistry.get(id);
      };
    
      setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    createKomente = async (komente: KomenteModel) => {
        this.loading = true;
        try {
          await agent.Komente.create(komente);
          runInAction(() => {
            this.KomenteRegistry.set(komente.id, komente);
            this.selectedKomente = komente;
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

    updateKomente = async (komente: KomenteModel) => {
        this.loading = true;
        try {
          await agent.Komente.update(komente);
          runInAction(() => {
            this.KomenteRegistry.set(komente.id, komente);
            this.selectedKomente = komente;
            this.editMode = false;
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
    };


    deleteKomente = async (id: number) => {
        this.loading = true;
        try {
          await agent.Komente.delete(id);
          runInAction(() => {
            this.KomenteRegistry.delete(id);
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
      };
    


    
    




}