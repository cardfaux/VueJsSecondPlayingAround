const app = Vue.createApp({
  data() {
    return {
      name: 'James',
      age: 31,
      imageUrl: 'http://www.jtthink.com/images/2020/v3.jpg'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
