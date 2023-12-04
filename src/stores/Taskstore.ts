
import { defineStore } from "pinia";

export const useTaskStore=defineStore('taskStore',{

   state:()=>({
     dataFromComponent:'',
   }),

   actions:{
       
       setDataFromComponent(payload:string ){
        this.dataFromComponent=payload;
       },
   },

   getters:{
    getDataFromComponent:state=>state.dataFromComponent,
   },
});