//blank
const app = Vue.createApp({
  data() {
    return {
      myName: "Augusto Ventura Paiva",
      myAge: 34,
      favNum: Math.random(),
      hieiImg:
        "https://static.wikia.nocookie.net/yuyuhakusho/images/d/d4/Hiei.jpg/revision/latest?cb=20200620062028&path-prefix=pt-br",
    };
  },
  methods: {
    myAgeNextDecade() {
      return this.myAge + 8;
    },
  },
});

app.mount("#assignment");
