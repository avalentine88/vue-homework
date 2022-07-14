"use strict";

 let articles =  [ 
      {
         title: "Нейросеть может читать текст быстрее человека",
         image: "https://picsum.photos/id/22/1000/1000"
      },
      {
         title: "Пять сервисов, которые помогут написать статью за 5 минут",
         image: "https://picsum.photos/id/24/1000/1000"
      },
      {
         title: "Названы основные правила движения поездов",
         image: "https://picsum.photos/id/28/1000/1000"
      },
      {
         title: "Самая посещаемая достопримечательность мира",
         image: "https://picsum.photos/id/27/1000/1000"
      },
      {
         title: "Появился новый термин для обозначения радиоволн",
         image: "https://picsum.photos/id/29/1000/1000"
      },
      {
         title: "В России появится новый вид бумаги",
         image: "https://picsum.photos/id/30/1000/1000"
      }
   ];

Vue.createApp({
	data(){
		return{
			articles,
			grid: false,
			list: false
		}

	},

	methods: {
		sortedAsGrid(){
			if(this.grid) {
				this.grid = false,
				this.list = true
		} else if (!this.grid) {
				this.grid = true,
				this.list = false
		}
		}, 
		sortedAsList(){
			if(this.list) {
				this.list = false,
				this.grid = true

		} else if (!this.list) {
				this.list = true,
				this.grid = false
		}
		},
	},	

}).mount("#app");