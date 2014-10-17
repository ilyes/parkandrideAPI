(function() {
    var m = angular.module('parkandride.MapService', []);

    m.value('MapService', {
        facilityStyle: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: '#FF6319',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        }),

        selectedFacilityStyle: new ol.style.Style({
            fill: new ol.style.Fill({
                color: [255, 255, 255, 0.5] // transparent white
            }),
            stroke: new ol.style.Stroke({
                color: "#007AC9",
                width: 3
            })
        }),

        hubStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 8,
                fill: new ol.style.Fill({
                    color: [255, 255, 255, 1] // white
                }),
                stroke: new ol.style.Stroke({
                    color: [0, 0, 0, 1], // blue
                    width: 3
                })
            })
        }),

        createMap: function(ngElement, options) {
            var layers = [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ];

            if (options.layers) {
                layers = layers.concat(options.layers);
            }

            var interactions = new ol.Collection();
            interactions.push(new ol.interaction.KeyboardZoom());

            var controls = new ol.Collection();
            controls.push(new ol.control.Attribution());
            controls.push(new ol.control.Zoom());
            controls.push(new ol.control.FullScreen());

            if (!options.readOnly) {
                interactions.push(new ol.interaction.DoubleClickZoom());
                interactions.push(new ol.interaction.MouseWheelZoom());
                interactions.push(new ol.interaction.DragZoom());
                interactions.push(new ol.interaction.KeyboardPan());
                interactions.push(new ol.interaction.DragPan({
                    kinetic: new ol.Kinetic(-0.005, 0.05, 100)
                }));
            }

            return new ol.Map({
                target: ngElement.children()[0],
                controls: controls,
                interactions: interactions,
                layers: layers,
                view: new ol.View({
                    center: ol.proj.transform([24.941025, 60.173324], 'EPSG:4326', 'EPSG:3857'),
                    zoom: 12
                })
            });
        }
    });
})();