bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 x) {

  if (all(lessThan(x, hi))) {

    if (all(greaterThan(x, lo))) {
      return true;
    }
  }
  return false;
}


//Do not change this line or the name of the above function
#pragma glslify: export(inBox)
