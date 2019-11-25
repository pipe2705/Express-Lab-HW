const groceries = [
  { tobuy: "Bread", done: true },
  { tobuy: "Eggs", done: false },
  { tobuy: "Milk", done: false }
];

module.exports = {
  getAll: function() {
    return groceries;
  }
};
