 new Vue({
  el: '#app',
  data: {

    question:"",
    answer:"",
    image:"",

  },
  watch:{
    question:function(newQuestion){
      this.answer='منتظرك تكتب السؤال 😑' 
      this.getAnswer()

    }
  },
  methods:{
    getAnswer:_.debounce(
      function(){
        let vm=this
        if(this.question.indexOf('؟')===-1){
          vm.answer=" 🧐لازم السؤال ينتهي بعلامة الاستفهام"
          return
        }
        vm.answer="افكر اممم ...🤯"
        axios.get("https://yesno.wtf/api")
        .then(function(response){
          vm.answer=_.capitalize(response.data.answer)
          vm.image=response.data.image
        })
        .catch(function(err){
          vm.answer="Errow"+err
        })
      },500
    )
  }
})