import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { PublikimeModel } from "../models/PublikimeModel";


export default class PublikimeStore{
    publikimeRegistry = new Map<number, PublikimeModel>();
    selectedPublikime: PublikimeModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    //sortimi i listes se revistave sipas vitit me te ri te publikimit 
    get publikimeByViti(){
        return Array.from(this.publikimeRegistry.values()).sort(
            (a, b) => b.viti_Publikimit - a.viti_Publikimit
        );
    }

    private setPublikime = (publikime: PublikimeModel) => {
        this.publikimeRegistry.set(publikime.id, publikime);
    }
    private getPublikime = (id: number) => {
        return this.publikimeRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    //funksioni Read
    loadPublikimet = async () => {
        this.loadingInitial = true;
        try{
            const publikimet = await agent.Publikime.list();
            publikimet.forEach((publikime) => {
                this.setPublikime(publikime);
            })
            this.setLoadingInitial(false);
        }catch(error){
            this.setLoadingInitial(false);
            console.log(error)
        }
    }

    //funksioni Read sipas ID
    loadPublikime = async (id: number) => {
        let publikime = this.getPublikime(id);
        if(publikime){
            this.selectedPublikime = publikime;
            return publikime;
        }else{
            this.loadingInitial = true;
            try{
                publikime = await agent.Publikime.details(id);
                this.setPublikime(publikime);
                runInAction(() => {
                    this.selectedPublikime = (publikime);
                })
                this.setLoadingInitial(false);
                return publikime;
            }catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
              }
        }
    }

    //funksioni CREATE
    createPublikime = async (publikime: PublikimeModel) => {
        this.loading = true;
        try{
            await agent.Publikime.create(publikime);
            runInAction(() => {
                this.publikimeRegistry.set(publikime.id, publikime);
                this.selectedPublikime = publikime;
                this.editMode = false;
                this.loading = false;
            })
        }catch (error) {
            console.log(error);
            runInAction(() => {
              this.loading = false;
            });
          }
    }

    //funksioni UPDATE
    updatePublikime = async (publikime: PublikimeModel) => {
        this.loading = true;
        try{
            await agent.Publikime.update(publikime);
            runInAction(() => {
                this.publikimeRegistry.set(publikime.id, publikime);
                this.selectedPublikime = publikime;
                this.editMode = false;
                this.loading = false;
            })
        }catch (error) {
            runInAction(() => {
              this.loading = false;
            });
          }
    }

    //funksioni DELETE
    deletePublikime = async (id: number) => {
        this.loading  = true;
        try{
            await agent.Publikime.delete(id);
            runInAction(() => {
                this.publikimeRegistry.delete(id);
                this.loading = false;
            })
        }catch (error) {
            runInAction(() => {
              this.loading = false;
            });
          }
    }


}