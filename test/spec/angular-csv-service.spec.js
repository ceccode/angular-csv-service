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

    describe('toJson', function() {

      it('should return undefined if no csv is passed', function() {
        expect(fCsv.toJson()).toBe(undefined);
      });

      it('should return a valid json obj', function() {
        var csv = dummycsv.csv;
        expect(JSON.parse(fCsv.toJson(csv))).not.toBe(false);

      });

      it('should return a valid json without headers', function() {
        var csv = dummycsv.csv_noheading;
        expect(fCsv.toJson(csv)).not.toContain("heading1");
        expect(fCsv.toJson(csv)).not.toContain("heading2");
        expect(fCsv.toJson(csv)).not.toContain("heading3");

      });

    });

  });

});
