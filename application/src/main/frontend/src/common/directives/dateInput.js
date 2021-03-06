// Copyright © 2015 HSL <https://www.hsl.fi>
// This program is dual-licensed under the EUPL v1.2 and AGPLv3 licenses.

(function() {
    var m = angular.module('parkandride.date', [
        'ui.bootstrap.datepicker'
    ]);

    m.constant('dateInputConfig', {
        format: 'd.M.yyyy'
    });

    m.config(function(uibDatepickerConfig, uibDatepickerPopupConfig, dateInputConfig) {
        _.extend(uibDatepickerConfig, {
            startingDay: 1,
            yearRange: 5,
            minDate: new Date(2010, 0, 1, 0, 0, 0)
        });
        _.extend(uibDatepickerPopupConfig, {
            showButtonBar: false,
            datepickerPopup: dateInputConfig.format
        });
    });

    /**
     * Formats and parses dates
     */
    m.directive('dateInput', function(dateFilter, dateInputConfig, uibDateParser) {
        return {
            require: 'ngModel',
            priority: 2,
            link: function(scope, elem, attr, ngModel) {
                function parseDate(val) {
                    return uibDateParser.parse(val, dateInputConfig.format);
                }

                ngModel.$formatters.unshift(function(val) {
                    return dateFilter(val, dateInputConfig.format);
                });
                ngModel.$parsers.unshift(function(val) {
                    return parseDate(val);
                });

                ngModel.$validators.date = function(modelValue, viewValue) {
                    return !!parseDate(viewValue);
                };
            }
        };
    });
})();
