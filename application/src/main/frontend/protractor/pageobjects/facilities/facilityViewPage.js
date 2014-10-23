'use strict';

module.exports = function(spec) {
    var that = require('../base')(spec);

    spec.view = $('.wdFacilityView');
    spec.name = $('.wdFacilityName');
    spec.aliases = $('.wdAliases');
    spec.toListButton = element.all(by.linkUiSref('facility-list')).first();
    spec.capacityTypes = element.all(by.css(".wdCapacityType"));

    that.getName = function () {
        return spec.name.getText();
    };

    that.assertAliases = function (aliases) {
        expect(spec.aliases.getText()).toEqual((aliases || []).join(', '));
    };

    that.assertCapacities = function (capacities) {
        for (var capacityType in capacities) {
            var capacity = capacities[capacityType];
            for (var prop in capacity) {
                expect($('.wd' + capacityType + prop).getText()).toEqual("" + capacity[prop]);
            }
        }
    };

    that.getCapacityTypes = function() {
        return spec.capacityTypes.filter(function(el) { return el.isDisplayed(); }).getText();
    };

    that.toListView = function () {
        return spec.toListButton.click();
    };

    return that;
};