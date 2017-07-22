function displayLetterFrequencies() {

  var input = document.getElementById("input");
  var inputValue = input.value.toLowerCase();
  var text = document.getElementById("text");
  var letters = document.getElementById("letters");
  var totalChars = 0;
  var percent = 0;
  //var bar = "";
  var data = [];
  //var barChart;

  function totalCharCount(input) {
    for (i=0; i<inputValue.length; i++) {
      totalChars++;
    }
    text.innerHTML = "Total Character Count: " + totalChars + " | Unique Letters: ";
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

  var letterNumberObj = createLetterFrequencies();
  //var arr = [];
  
  var unroundedPercent;
  function numberToPercent(num) {
    unroundedPercent =  (num / totalChars) * 100;
    return Math.round(unroundedPercent * 10) / 10;   
  }  
  
  var letterArr = [];

  for (val in letterNumberObj) {
    percent = numberToPercent(letterNumberObj[val]);
    
    letterArr.push(
      {
        letter: val,
        number: percent  
      }
    );
    data.push(percent);
    //arr.push("<br>" + val + ": " + barChart + " " + percent + "%");
  }

  //arr = arr.sort(); 

  letterArr.sort(function(a, b) {
    return (a.letter < b.letter) ? -1 : (a.letter > b.letter) ? 1 : 0;
  });

  var numArr = [];

  for (val in letterArr) {
    numArr.push(letterArr[val].number);
  }

  var highestFreq = numArr.reduce(function(a, b) {
    return Math.max(a, b);  
  });

  var maxWidth = 1070;

  //letters.innerHTML = arr.join(""); 
  text.innerHTML += letterArr.length;

  //build chart

  function drawChart() {
    d3.select(".chart")
    .html(null)
    .selectAll("div")
    .data(letterArr)
      .enter()
      .append("div")
      .style("width", function(d) { return (d.number / highestFreq) * maxWidth + 70 + "px"; })
      .text(function(d) { return d.letter + " " + d.number + "%"; })
      
  }

  drawChart();
  
}




 

