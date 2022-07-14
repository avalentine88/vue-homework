'use strict';

const addImage = {
    emits: ["addImage"],
    template: 
    `
    	<form @submit.prevent="$emit('addImage, addedImage ')">
    		<input type="text" placeholder="Введите название изображения" v-model="addedImage.name">
    		<input type="text" placeholder="Введите ссылку на изображение" v-model="addedImage.img">
    		<input type="submit" value="Добавить изображение">
    	</form>
    `,
    data(){
    	return{
    		addedImage:{
    			name: "",
    			img: ""
    		}
    	}
    }
};


const deleteImage = {
    emits: ["deleteImage"],
    template: 
    `	<div>
   			<strong>{{ info.name }}</strong> 
   			<img :src="info.img" :alt="info.name">
   			<button @click="$emit('deleteImage', info)">Удалить изображение</button>
   		</div>	
    `,
    props: {
        info: Object
    }
};


let app = Vue.createApp({
    data(){
        return{
            images: [
                {name: "Горы", img: "https://picsum.photos/id/1037/5760/3840"},
                {name: "Лес", img: "https://picsum.photos/id/1043/5184/3456"},
                {name: "Скалы", img: "https://picsum.photos/id/1050/6000/4000"},
                {name: "Озеро", img: "https://picsum.photos/id/1051/4928/3264"},
                {name: "Море", img: "https://picsum.photos/id/1057/6016/4016"},
                {name: "Океан", img: "https://picsum.photos/id/1083/5472/3648"},
                {name: "Поляна", img: "https://picsum.photos/id/11/2500/1667"},
                {name: "Небо", img: "https://picsum.photos/id/120/4928/3264"}
            ]
        }
    },
    methods:{
        del(value){
         	this.images.splice(this.cards.indexOf(value), 1);
        },
        add(value){
           this.images.unshift(value);
       }
   }
});


app.component("add-image", addImage);
app.component("delete-image", deleteImage);
app.mount("#app");