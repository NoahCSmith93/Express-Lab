const foods = [
    {dish: 'Home-made Ravioli', ingredients: false},
    {dish: 'Chicken and Waffles', ingredients: true},
    {dish: 'Chocolate-Chip Cookies', ingredients: true}
  ];

  module.exports = {
    getAll: function() {
        return foods
    }
  }