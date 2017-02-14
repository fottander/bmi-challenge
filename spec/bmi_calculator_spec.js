describe("BMICalculator", function(){
  var calculator;
  var person;

  beforeEach(function(){
    person = new Person({weight: 86, height: 190});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function(){
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
});
