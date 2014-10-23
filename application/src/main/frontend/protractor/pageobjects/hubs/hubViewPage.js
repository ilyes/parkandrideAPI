'use strict';

module.exports = function(spec) {
    var _ = require('lodash');

    var that = require('../base')(spec);

    spec.view = $('.wdHubView');
    spec.name = $('.wdHubName');

    that.getName = function () {
        return spec.name.getText();
    };

    that.assertCapacities = function (facilities) {
        var sum = _.reduce(facilities, function (acc, facility) {
            return acc.incCapacity(facility);
        });

        for (var capacityType in sum.capacities) {
            var capacity = sum.capacities[capacityType];
            for (var prop in capacity) {
                expect($('.wd' + capacityType + prop).getText()).toEqual("" + capacity[prop]);
            }
        }
    };

    return that;
};