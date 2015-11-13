angular.module('fCsv', [])

.factory('fCsv', function() {

  var csvToJson = function(csv, separator, header) {

    if (!csv) {
      return;
    }
    separator = separator || ",";
    header = header || true;

    var result = [];
    var headers = [];
    var start = 0;

    var lines = csv.split('\n');
    var columnCount = lines[0].split(separator).length;
    if (header) {
      headers = lines[0].split(separator);
      start = 1;
    }

    for (var i = start; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(new RegExp(separator + '(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)'));
      if (currentline.length === columnCount) {
        if (header)  {
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
        } else {
          for (var k = 0; k < currentline.length; k++) {
            obj[k] = currentline[k];
          }
        }
        result.push(obj);
      }
    }
    return JSON.stringify(result); //JavaScript object
  };

  var jsonToCsv = function(json, labels, quote) {

    if (!json) {
      return;
    }
    labels = labels || false;
    quote = quote || false;

    var array = typeof json != 'object' ? JSON.parse(json) : json;
    var line = '';
    var str = '';

    if (labels) {
      var head = array[0];
      if (quote) {
        for (var index in array[0]) {
          var value = index + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      } else {
        for (var index in array[0]) {
          line += index + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
      var line = '';

      if (quote) {
        for (var index in array[i]) {
          var value = array[i][index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      } else {
        for (var index in array[i]) {
          line += array[i][index] + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }

    return str;

  };

  return {
    toJson: csvToJson,
    csvToJson: csvToJson,
    jsonToCsv: jsonToCsv
  };

});
