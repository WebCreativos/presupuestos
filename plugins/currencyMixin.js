import Vue from "vue";

Vue.mixin({
  methods: {
    setCurrency(currency) {
      return (currency == "UYU") ? "$" : (currency == "USD") ? "US$" : currency
    }
  }
});
