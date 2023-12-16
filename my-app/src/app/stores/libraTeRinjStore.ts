import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { LibraTeRinjModel } from "../models/LibraTeRinjModel";


export default class LibraTeRinjStore{
    libraTeRinjRegistry = new Map<number, LibraTeRinjModel>();
    selectedLibraTeRinj: LibraTeRinjModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get libraTeRinjByViti(){
        return Array.from(this.libraTeRinjRegistry.values()).sort(
            (a, b) => b.viti_Publikimit - a.viti_Publikimit
        );
    }

    private setLibraTeRinj = (libraTeRinj: LibraTeRinjModel) => {
        this.libraTeRinjRegistry.set(libraTeRinj.id, libraTeRinj);
    }
    private getLibraTeRinj = (id: number) => {
        return this.libraTeRinjRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    //funksioni Read
    loadLibraTeRinj = async () => {
        this.loadingInitial = true;
        try{
            const libraTeRinj = await agent.LibraTeRinj.list();
            libraTeRinj.forEach((libraTeRinj) => {
                this.setLibraTeRinj(libraTeRinj);
            })
            this.setLoadingInitial(false);
        }catch(error){
            this.setLoadingInitial(false);
            console.log(error)
        }
    }

    //funksioni Read sipas ID
    loadLibriIRi = async (id: number) => {
        let libraTeRinj = this.getLibraTeRinj(id);
        if(libraTeRinj){
            this.selectedLibraTeRinj = libraTeRinj;
            return libraTeRinj;
        }else{
            this.loadingInitial = true;
            try{
                libraTeRinj = await agent.LibraTeRinj.details(id);
                this.setLibraTeRinj(libraTeRinj);
                runInAction(() => {
                    this.selectedLibraTeRinj = (libraTeRinj);
                })
                this.setLoadingInitial(false);
                return libraTeRinj;
            }catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
              }
        }
    }

    //funksioni CREATE
    createLibraTeRinj = async (libraTeRinj: LibraTeRinjModel) => {
        this.loading = true;
        try{
            await agent.LibraTeRinj.create(libraTeRinj);
            runInAction(() => {
                this.libraTeRinjRegistry.set(libraTeRinj.id, libraTeRinj);
                this.selectedLibraTeRinj = libraTeRinj;
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
    updateLibraTeRinj = async (libraTeRinj: LibraTeRinjModel) => {
        this.loading = true;
        try{
            await agent.LibraTeRinj.update(libraTeRinj);
            runInAction(() => {
                this.libraTeRinjRegistry.set(libraTeRinj.id, libraTeRinj);
                this.selectedLibraTeRinj = libraTeRinj;
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
    deleteLibraTeRinj = async (id: number) => {
        this.loading  = true;
        try{
            await agent.LibraTeRinj.delete(id);
            runInAction(() => {
                this.libraTeRinjRegistry.delete(id);
                this.loading = false;
            })
        }catch (error) {
            runInAction(() => {
              this.loading = false;
            });
          }
    }


}