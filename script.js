let vue = new Vue({
  el: '#app',
  data: {
    app : [
      {name : "list1", item: [
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false}
      ]},
    	{name : "list2", item: [
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false}
      ]},
      {name : "list3", item: [
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false}
      ]},
      {name : "list4", item: [
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false},
        {isActive : false}
      ]}
    ]
  },
  methods: {
  	cl(id, id2){
  		this.app[id].item[id2].isActive = true;
  		  var audio = new Audio(); // Создаём новый элемент Audio
		  audio.src = 'sound/' + 'list' + (id + 1) + '/sound'+ (id + 1) +'.mp3'; // Указываем путь к звуку "клика"
		  audio.volume = 0.2;
		  audio.play(); // Автоматически запускаем
		  document.querySelector("#timer").classList.add("a");
		  setTimeout(() => {
		  	let value = 0.2;
		  	let i = setInterval(()=>{
		  		value -= 0.02;
		  		audio.volume = value;
		  	}, 100);
		  	setTimeout(()=>{
		  		clearInterval(i);
		  		audio.pause();
		  		document.querySelector("#timer").classList.remove("a");
		  	}, 1000);
		  	
		  	
		  }, 14000);
  	}
  }
});


