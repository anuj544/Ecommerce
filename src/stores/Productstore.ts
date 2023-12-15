import type{ ProductTypes } from './types/index';
import { defineStore } from 'pinia';
import { idText } from 'typescript';


export const useMyStore = defineStore('productStore',({
    state:()=>({
           data:[]  as ProductTypes[],
           itemdata:[{
            i:0,
            im:'',
            ip:0,
            count:1,
           }],
        
    }),

    actions:{

        async fecthData(){

            try{
                const response=await fetch('https://fakestoreapi.com/products');
                const data=await response.json();
                this.data=data;
                console.log("data", data)
            }

            catch(error){
                console.error('Error fetching data',error);
            }
        },


         itemsadded(itemid ,itemimage,itemprice){

            const existingItemIndex = this.itemdata.findIndex(item => item.i === itemid);    //to check if element with same id already exists or not
            if (existingItemIndex === -1) { 
        
            this.itemdata.push({
              i:itemid,
              im:itemimage,
              ip:itemprice,
              count:1,
            });
        }
        
             console.log("called");
        }
        // setselectedimage(image){
        //     this.selectedImage=image;
        // },

        // setselectedprice(price){
        //     this.selectedprice=price;
        // }
    },
}));