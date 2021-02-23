function printSpiral(n) {
  // populating a matrix of 0s
  var m = [];
  var diameter = n * 2;
  for (var i = 0; i < diameter; i++) {
    m[i] = [];
    for (var j = 0; j < diameter; j++) {
      m[i][j] = 0;
    }
  }

  var i = n,
    j = n; // center of the spiral
  var countOfPoints = 1; //the count of points before each turn
  m[i][j] = 1;

  var direction_data = [
    // steps to move in each direction
    { i: 2, j: 0 }, // down
    { i: 0, j: 2 }, // right
    { i: -2, j: 0 }, // up
    { i: 0, j: -2 }, // left
  ];

  var currentDirection = 0; //starts by going down
  // var currentDirection = 1; //starts by going right
  // var currentDirection = 2; //starts by going up
  // var currentDirection = 3; //starts by going left
  var breakLoop = false;
  while (!breakLoop) {
    var nextDirection = currentDirection % 4;

    for (var k = 0; k < countOfPoints; k++) {
      i = i + direction_data[nextDirection].i;
      j = j + direction_data[nextDirection].j;
      if (i >= 0 && i < diameter && j >= 0 && j < diameter) {
        m[i][j] = 1; //insertings 1s to specific points
      } else {
        breakLoop = true;
        break; //break loop if the point gets out of the radius
      }
    }

    currentDirection += 1; //changing the direction in each loop
    countOfPoints += 1; //incrementing the number of points in each turn
  }

  //print the spiral view in console
  for (var i = 0; i < diameter; i++) {
    var s = "";
    for (var j = 0; j < diameter; j++) {
      s += m[i][j] == 0 ? " " : "B";
    }
    if (s.trim().length > 0) console.log(s);
  }
}

printSpiral(20);
