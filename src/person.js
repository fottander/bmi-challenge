function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.pounds = attr.pounds;
  this.feet = attr.feet;
  this.inches = attr.inches;
}

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_bmi_imp = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
