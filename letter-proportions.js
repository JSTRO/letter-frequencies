function displayLetterFrequencies() {

  var input = document.getElementById("input");
  var inputValue = input.value.toLowerCase();
  var text = document.getElementById("text");
  var letters = document.getElementById("letters");
  var totalChars = 0;
  var percent = 0;
  var bar = "";

  function totalCharCount(input) {
    for (i=0; i<inputValue.length; i++) {
      totalChars++;
    }
    text.innerHTML = "Total Character Count: " + totalChars;
  }

  totalCharCount(inputValue);

  function createLetterFrequencies() {
    var letterFrequencies = {};  

    for (i=0; i<inputValue.length; i++) {
      if (/[a-z]/g.test(inputValue[i])) {
        if (letterFrequencies.hasOwnProperty(inputValue[i])) {
          letterFrequencies[inputValue[i]]++;
        } else {
          letterFrequencies[inputValue[i]] = 1;
        }  
      }   
    } 
    return letterFrequencies;
  }

  var letterObj = createLetterFrequencies();
  var arr = [];
  

  function numberToPercent(num) {
    return Math.round(num / totalChars * 100);  
  }  

  function percentToBar(percent) {
    bar = Array(percent).join("=");  
    return bar;
  }

  for (val in letterObj) {
    percent = numberToPercent(letterObj[val]);
    var barChart = percentToBar(percent);
    arr.push("<br>" + val + ": " + barChart + " " + percent + "%");
  }

  arr = arr.sort(); 

  letters.innerHTML = arr.join("");

}


 

