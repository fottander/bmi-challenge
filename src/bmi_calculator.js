function BMICalculator(){
}

BMICalculator.prototype.metric_bmi = function(obj){
  var weight = obj.weight;
  var height = obj.height;
  var pounds = obj.pounds;
  var feet = obj.feet;
  var inches = obj.inches;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }


function setBMIMessage (obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
    obj.resultMessage = "more burgers";
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
    obj.resultMessage = "whatever u want, apparently!";
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
    obj.resultMessage = "more carrots";
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese";
    obj.resultMessage = "only carrots";
  }
}
};

BMICalculator.prototype.imperial_bmi = function(obj){
  var weight = obj.weight;
  var height = obj.height;
  var pounds = obj.pounds;
  var feet = obj.feet;
  var inches = obj.inches;
  if (pounds > 0 && feet > 0 && inches > 0) {
    var finalBmi = (pounds * 703) / Math.pow((feet * 12 + inches), 2);
    console.log(finalBmi);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }

  function setBMIMessage (obj) {
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight";
      obj.resultMessage = "more burgers";
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Normal";
      obj.resultMessage = "whatever u want, apparently!";
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight";
      obj.resultMessage = "more carrots";
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese";
      obj.resultMessage = "only carrots";
    }
  }
  };
