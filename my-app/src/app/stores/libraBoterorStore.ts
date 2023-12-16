import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { LibraBoterorModel } from "../models/LibraBoterorModel";


export default class LibraBoterorStore{
    libraBoterorRegistry = new Map<number, LibraBoterorModel>();
    selectedLibraBoteror: LibraBoterorModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    //sortimi sipas vitit me te ri te publikimit 
    get libraBoterorByViti(){
        return Array.from(this.libraBoterorRegistry.values()).sort(
            (a, b) => b.id - a.id
        );
    }

    private setLibraBoteror = (libraBoteror: LibraBoterorModel) => {
        this.libraBoterorRegistry.set(libraBoteror.id, libraBoteror);
    }
    private getLibraBoteror = (id: number) => {
        return this.libraBoterorRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    //funksioni Read
    loadLibratBoteror = async () => {
        this.loadingInitial = true;
        try{
            const libratBoteror = await agent.LibraBoteror.list();
            libratBoteror.forEach((libraBoteror) => {
                this.setLibraBoteror(libraBoteror);
            })
            this.setLoadingInitial(false);
        }catch(error){
            this.setLoadingInitial(false);
            console.log(error)
        }
    }

    //funksioni Read sipas ID
    loadLibriBoteror = async (id: number) => {
        let libraBoteror = this.getLibraBoteror(id);
        if(libraBoteror){
            this.selectedLibraBoteror = libraBoteror;
            return libraBoteror;
        }else{
            this.loadingInitial = true;
            try{
                libraBoteror = await agent.LibraBoteror.details(id);
                this.setLibraBoteror(libraBoteror);
                runInAction(() => {
                    this.selectedLibraBoteror = (libraBoteror);
                })
                this.setLoadingInitial(false);
                return libraBoteror;
            }catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
              }
        }
    }

    //funksioni CREATE
    createLibraBoteror = async (libraBoteror: LibraBoterorModel) => {
        this.loading = true;
        try{
            await agent.LibraBoteror.create(libraBoteror);
            runInAction(() => {
                this.libraBoterorRegistry.set(libraBoteror.id, libraBoteror);
                this.selectedLibraBoteror = libraBoteror;
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
    updateLibraBoteror = async (libraBoteror: LibraBoterorModel) => {
        this.loading = true;
        try{
            await agent.LibraBoteror.update(libraBoteror);
            runInAction(() => {
                this.libraBoterorRegistry.set(libraBoteror.id, libraBoteror);
                this.selectedLibraBoteror = libraBoteror;
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
    deleteLibraBoteror = async (id: number) => {
        this.loading  = true;
        try{
            await agent.LibraBoteror.delete(id);
            runInAction(() => {
                this.libraBoterorRegistry.delete(id);
                this.loading = false;
            })
        }catch (error) {
            runInAction(() => {
              this.loading = false;
            });
          }
    }


}