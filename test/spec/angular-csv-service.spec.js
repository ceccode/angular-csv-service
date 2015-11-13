'use strict';

describe('Service: fCsv', function() {
  var fCsv;

  function _inject() {
    inject(function(_fCsv_) {
      fCsv = _fCsv_;
    });
  }

  function _setup() {
    _inject();
  }

  beforeEach(function() {
    // Load the service's module
    module('fCsv');
  });

  describe('the service api', function() {
    beforeEach(function() {
      // Inject with expected values
      _setup();
    });

    it('should exist', function() {
      expect(!!fCsv).toBe(true);
    });

    it('should provide a method called toJson', function() {
      expect(typeof fCsv.toJson).toBe('function');
    });

    describe('csvToJson', function() {

      it('should return undefined if no csv is passed', function() {
        expect(fCsv.csvToJson()).toBe(undefined);
      });

      it('should return a valid json obj', function() {
        var csv = dummycsv.csv;
        expect(JSON.parse(fCsv.csvToJson(csv))).not.toBe(false);

      });

      it('should return a valid json without headers', function() {
        var csv = dummycsv.csv_noheading;
        expect(fCsv.csvToJson(csv)).not.toContain("heading1");
        expect(fCsv.csvToJson(csv)).not.toContain("heading2");
        expect(fCsv.csvToJson(csv)).not.toContain("heading3");

      });

    });

    describe('jsonToCsv', function() {

      it('should return undefined if no csv is passed', function() {
        expect(fCsv.jsonToCsv()).toBe(undefined);
      });

      it('should return a string without keys', function() {
        var json = dummycsv.json;

        expect(fCsv.jsonToCsv(json)).not.toContain("id");
        expect(fCsv.jsonToCsv(json)).not.toContain("name");
        expect(fCsv.jsonToCsv(json)).toContain("1");
        expect(fCsv.jsonToCsv(json)).toContain("Mario Rossi");
      });

      it('should return a string with keys as first row', function() {
        var json = dummycsv.json;
        var csv = fCsv.jsonToCsv(json, true);

        var lines = csv.split('\n');

        expect(lines[0]).toContain("id");
        expect(lines[0]).toContain("name");

      });j

    });


  });

});
