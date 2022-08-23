const app = Vue.createApp({
  data: function () {
    return {
      courseGoalGuto1: "Learn React and get a job paid in dollars!",
      courseGoalGuto2: "Learn Vue and get a job paid in euros!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    setGoal() {
      const num = Math.random();
      if (num > 0.5) {
        return this.courseGoalGuto1;
      } else {
        return this.courseGoalGuto2;
      }
    },
  },
});
app.mount("#user-goal");
