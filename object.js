const car = {
    model: "Toyota Corolla",
    year: 2020,
    price: 20000,
    start: function() {
      console.log(The car ${this.model} of year ${this.year} has started.);
    },
    stop: function() {
      console.log(The car ${this.model} of year ${this.year} has stopped.);
    }
  };
  
  // Using the car object
  car.start();  // Output: The car Toyota Corolla of year 2020 has started.
  car.stop();   // Output: The car Toyota Corolla of year 2020 has stopped.