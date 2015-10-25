# angular-csv-service

[![Build Status][build-image]][build-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]

angular-csv-service is a simple AngularJS csv to json service.

## Usage
Install with Bower:

`bower install angular-csv-service`

Then reference the minified script:

`<script src="bower_components\angular-csv-service\angular-csv-service.min.js"></script>`

Specify the csv service as a dependency of your application:

```javascript
angular.module('app', ['fCsv']);
```

Now just inject the csv service into any controller, service or directive where you need it.

```javascript
.controller('appCtrl', ['fCsv', function (fCsv) {

  $http.get('mycsvfile.csv').then(function(resp) {
     myJsonString = fCsv.toJson(resp.data);
  });

}]);
```

## Gulp tasks
All tasks can be run by simply running `gulp` or with the `npm test` command


## License

(The MIT License)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[build-url]: https://travis-ci.org/ceccode/angular-csv-service
[build-image]: http://img.shields.io/travis/ceccode/angular-csv-service.png

[depstat-url]: https://david-dm.org/ceccode/angular-csv-service
[depstat-image]: https://david-dm.org/ceccode/angular-csv-service.svg

[bower-url]: http://bower.io/search/?q=angular-csv-service
[bower-image]: https://badge.fury.io/bo/angular-csv-service.png

[npm-url]: https://www.npmjs.org/package/angular-csv-service
[npm-image]: https://badge.fury.io/js/angular-csv-service.png
