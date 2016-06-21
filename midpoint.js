var RouteUtilFactory = {
  getMidpoint: function (points) {
    var i = 0, ii = 0, d = 0, d2 = 0;

    for (; i < points.length - 1; i += 1) {
      d += points[i].distanceTo(points[i + 1]);
    }

    for (; ii < points.length; ii += 1) {
      d2 += points[ii].distanceTo(points[ii + 1]);

      if (d2 >= d / 2) {
        return points[ii];
      }
    }
  }
};