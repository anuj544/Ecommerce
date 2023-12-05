import { defineStore } from 'pinia';
import { idText } from 'typescript';


export const useMyStore = defineStore('productStore',({
    state:()=>({
           data:[],
           itemdata:[{
            i:0,
            im:'',
            ip:0,
           }],
        
    }),

    actions:{

        async fecthData(){

            try{
                const response=await fetch('https://fakestoreapi.com/products');
                const data=await response.json();
                this.data=data;
            }

            catch(error){
                console.error('Error fetching data',error);
            }
        },


         itemsadded(itemid,itemimage,itemprice){
            this.itemdata.push({
              i:itemid,
              im:itemimage,
              ip:itemprice,
            });
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