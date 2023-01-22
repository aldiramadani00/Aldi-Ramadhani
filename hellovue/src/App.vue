<script>
export default{
  data() {
    return {
      datasensor: "60",
      datasensor2: "80",
    };
  },
  created(){
    this.getData()
  },
  methods:{
    async getData(){
      const data = await fetch("http://localhost:80/sensor1")
      const datajson = await data.json()
      console.log(datajson)
      //this.datasensor = 100
    },
  },
};

</script>

<template>
<div>
  hello {{ datasensor }}
  <button @click="getData">Ambil Data</button>
</div>
</template>