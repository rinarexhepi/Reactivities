import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { KontaktiModel } from "../models/KontaktiModel";

export default class KontaktiStore{
    kontaktiRegistry = new Map<number, KontaktiModel>();
    selectedKontakti: KontaktiModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get kontaktiById() {
        return Array.from(this.kontaktiRegistry.values()).sort(
          (a, b) => b.id - a.id
        );
      }


    loadKontakti = async () => {
        this.loadingInitial=true;
        try {
          const kontakti = await agent.Kontakti.list();
          kontakti.forEach((kontakti) => {
            this.setKontakti(kontakti);
          });
    
          this.setLoadingInitial(false);
        } catch (error) {
          this.setLoadingInitial(false);
    
          console.log(error);
        }
    };

    loadKontakt = async (id: number) => {
        let kontakti = this.getKontakti(id);
        if (kontakti) {
          this.selectedKontakti = kontakti;
          return kontakti;
        } else {
          this.loadingInitial = true;
          try {
            kontakti = await agent.Kontakti.details(id);
            this.setKontakti(kontakti);
            runInAction(()=>{
              this.selectedKontakti=(kontakti);
            })
            this.setLoadingInitial(false);
            return kontakti;
          } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
          }
        }
    };

    private setKontakti = (kontakti: KontaktiModel) => {
        this.kontaktiRegistry.set(kontakti.id, kontakti);
      };
    
      private getKontakti = (id: number) => {
        return this.kontaktiRegistry.get(id);
      };
    
      setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    createKontakti = async (kontakti: KontaktiModel) => {
        this.loading = true;
        try {
          await agent.Kontakti.create(kontakti);
          runInAction(() => {
            this.kontaktiRegistry.set(kontakti.id, kontakti);
            this.selectedKontakti = kontakti;
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

    updateKontakti = async (kontakti: KontaktiModel) => {
        this.loading = true;
        try {
          await agent.Kontakti.update(kontakti);
          runInAction(() => {
            this.kontaktiRegistry.set(kontakti.id, kontakti);
            this.selectedKontakti = kontakti;
            this.editMode = false;
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
    };


    deleteKontakti = async (id: number) => {
        this.loading = true;
        try {
          await agent.Kontakti.delete(id);
          runInAction(() => {
            this.kontaktiRegistry.delete(id);
            this.loading = false;
          });
        } catch (error) {
          runInAction(() => {
            this.loading = false;
          });
        }
      };
    


    
    




}