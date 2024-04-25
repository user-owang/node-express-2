function timeWord(timeString) {
  let hour = timeString.slice(0, 2);
  let minute = timeString.slice(3);
  if (hour === "00" && minute === "00") {
    return "midnight";
  }
  if (hour === "12" && minute === "00") {
    return "noon";
  }
  let hourString = "";
  let minuteString = "";
  let amPM = "am";
  let hourConvert = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  if (+hour > 11) {
    hourString = hourConvert[hour - 12];
    amPM = "pm";
  } else {
    hourString = hourConvert[+hour];
  }
  let tens = [
    "oh",
    [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    "twenty",
    "thirty",
    "fourty",
    "fifty",
  ];
  let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (minute === "00") {
    minuteString = "o'clock";
  } else if (minute[0] === "1") {
    minuteString = tens[1][minute[1]];
  } else {
    minuteString = `${tens[minute[0]]} ${ones[minute[1]]}`;
  }
  return `${hourString} ${minuteString.trim()} ${amPM}`;
}

module.exports = timeWord;
