import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { LibraPerFemijeModel } from "../models/LibraPerFemijeModel";


export default class LibraPerFmijeStore{
    libraPerFemijeRegistry = new Map<number, LibraPerFemijeModel>();
    selectedLibraPerFemije: LibraPerFemijeModel | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    //sortimi i listes se revistave sipas vitit me te ri te publikimit 
    get libraPerFemijeByViti(){
        return Array.from(this.libraPerFemijeRegistry.values()).sort(
            (a, b) => b.viti_publikimit - a.viti_publikimit
        );
    }

    private setLibraPerFemije = (libraPerFemije: LibraPerFemijeModel) => {
        this.libraPerFemijeRegistry.set(libraPerFemije.id, libraPerFemije);
    }
    private getLibraPerFemije = (id: number) => {
        return this.libraPerFemijeRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    //funksioni Read
    loadLibraPerFemije= async () => {
        this.loadingInitial = true;
        try{
            const libraPerFemije = await agent.LibratPerFemije.list();
            libraPerFemije.forEach((libraPerFemije) => {
                this.setLibraPerFemije(libraPerFemije);
            })
            this.setLoadingInitial(false);
        }catch(error){
            this.setLoadingInitial(false);
            console.log(error)
        }
    }

    //funksioni Read sipas ID
    loadLibriPerFemije = async (id: number) => {
        let libraPerFemije = this.getLibraPerFemije(id);
        if(libraPerFemije){
            this.selectedLibraPerFemije = libraPerFemije;
            return libraPerFemije;
        }else{
            this.loadingInitial = true;
            try{
                libraPerFemije = await agent.LibratPerFemije.details(id);
                this.setLibraPerFemije(libraPerFemije);
                runInAction(() => {
                    this.selectedLibraPerFemije = (libraPerFemije);
                })
                this.setLoadingInitial(false);
                return libraPerFemije;
            }catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
              }
        }
    }

    //funksioni CREATE
    createLibraPerFemije = async (libraPerFemije: LibraPerFemijeModel) => {
        this.loading = true;
        try{
            await agent.LibratPerFemije.create(libraPerFemije);
            runInAction(() => {
                this.libraPerFemijeRegistry.set(libraPerFemije.id, libraPerFemije);
                this.selectedLibraPerFemije = libraPerFemije;
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
    updateLibraPerFemije = async (libraPerFemije: LibraPerFemijeModel) => {
        this.loading = true;
        try{
            await agent.LibratPerFemije.update(libraPerFemije);
            runInAction(() => {
                this.libraPerFemijeRegistry.set(libraPerFemije.id, libraPerFemije);
                this.selectedLibraPerFemije = libraPerFemije;
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
    deleteLibraPerFemije = async (id: number) => {
        this.loading  = true;
        try{
            await agent.LibratPerFemije.delete(id);
            runInAction(() => {
                this.libraPerFemijeRegistry.delete(id);
                this.loading = false;
            })
        }catch (error) {
            runInAction(() => {
              this.loading = false;
            });
          }
    }


}