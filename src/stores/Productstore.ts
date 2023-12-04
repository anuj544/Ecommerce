import { defineStore } from 'pinia';


export const useMyStore = defineStore('productStore',({
    state:()=>({
           data:[],
           selectedImage:' ',
           selectedprice:0,
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



        setselectedimage(image){
            this.selectedImage=image;
        },

        setselectedprice(price){
            this.selectedprice=price;
        }
    },
}));