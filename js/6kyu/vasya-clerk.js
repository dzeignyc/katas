function tickets(peopleInLine){
var a25 = 0;
var a50 = 0;
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      a25++;
    } else if (peopleInLine[i] == 50) {
      a25--; a50++;
    } else if (peopleInLine[i] == 100) {
      if (a50 == 0 && a25 >= 3){
        a25 -= 3;
      } else {
        a25--; a50--;
      }
    }
    if (a25 < 0 || a50 < 0) {
       return 'NO';
    }
  }
  return 'YES';
}
