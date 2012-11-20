var map;

var mapConfigs = {


    'bing-light': [

        {
            title: 'Census Blocks', 
            table: 'bgp_clip', 
            style: 'bing-light-bgp',
            visible: true
        },

        {
            title: 'Census Blocks Labels', 
            table: 'bgp_point_clip', 
            style: 'bing-light-bgp-label',
            visible: true
        },

        {
            title: 'Census Tract',
            table: 'trx_clip',
            style: 'bing-light-trx',
            visible: false
        },


        {
            title: 'Census Tract Labels',
            table: 'trx_point_clip',
            style: 'bing-light-trx-label',
            visible: false
        },


        {
            title: 'Census Place',
            table: 'pla_clip',
            style: 'bing-light-pla',
            visible: false
        },

        {
            title: 'Census Place Label',
            table: 'pla_clip',
            style: 'bing-light-pla-label',
            visible: false
        },


        {
            title: 'MCD',
            table: 'mcd_clip',
            style: 'bing-light-mcd',
            visible: false
        },

        {
            title: 'MCD Label',
            table: 'mcd_label',
            style: 'bing-light-mcd-label',
            visible: false
        },



        {
            title: 'Combined Statistical Area',
            table: 'csa_clip',
            style: 'bing-light-csa',
            visible: false
        },


        {
            title: 'Zip Code',
            table: 'zp5_clip',
            style: 'bing-light-zp5',
            visible: true
        },


        {
            title: 'Zip Code Label',
            table: 'zp5_label',
            style: 'bing-light-zp5-label',
            visible: true
        },


        {
            title: 'County',
            table: 'cty_clip',
            style: 'bing-light-cty',
            visible: true
        },


        {
            title: 'County Label',
            table: 'cty_point_clip',
            style: 'bing-light-cty-label',
            visible: true
        },


        {
            title: 'Nielsen Designated Area',
            table: 'dma_clip',
            style: 'bing-light-dma',
            visible: false
        },


        {
            title: 'Nielsen Designated Area Label',
            table: 'dma_label',
            style: 'bing-light-dma-label',
            visible: false
        },


        {
            title: 'States',
            table: 'sta_clip',
            style: 'bing-light-sta',
            visible: true
        },

    
    ],


    'bing-dark': [

        {
            title: 'Census Blocks', 
            table: 'bgp_clip', 
            style: 'bing-dark-bgp',
            visible: true
        },

        {
            title: 'Census Blocks Labels', 
            table: 'bgp_point_clip', 
            style: 'bing-dark-bgp-label',
            visible: true
        },

        {
            title: 'Census Tract',
            table: 'trx_clip',
            style: 'bing-dark-trx',
            visible: false
        },


        {
            title: 'Census Tract Labels',
            table: 'trx_point_clip',
            style: 'bing-dark-trx-label',
            visible: false
        },


        {
            title: 'Census Place',
            table: 'pla_clip',
            style: 'bing-dark-pla',
            visible: false
        },

        {
            title: 'Census Place Label',
            table: 'pla_clip',
            style: 'bing-dark-pla-label',
            visible: false
        },


        {
            title: 'MCD',
            table: 'mcd_clip',
            style: 'bing-dark-mcd',
            visible: false
        },

        {
            title: 'MCD Label',
            table: 'mcd_label',
            style: 'bing-dark-mcd-label',
            visible: false
        },



        {
            title: 'Combined Statistical Area',
            table: 'csa_clip',
            style: 'bing-dark-csa',
            visible: false
        },


        {
            title: 'Zip Code',
            table: 'zp5_clip',
            style: 'bing-dark-zp5',
            visible: true
        },


        {
            title: 'Zip Code Label',
            table: 'zp5_label',
            style: 'bing-dark-zp5-label',
            visible: true
        },


        {
            title: 'County',
            table: 'cty_clip',
            style: 'bing-dark-cty',
            visible: true
        },


        {
            title: 'County Label',
            table: 'cty_point_clip',
            style: 'bing-dark-cty-label',
            visible: true
        },


        {
            title: 'Nielsen Designated Area',
            table: 'dma_clip',
            style: 'bing-dark-dma',
            visible: false
        },


        {
            title: 'Nielsen Designated Area Label',
            table: 'dma_label',
            style: 'bing-dark-dma-label',
            visible: false
        },


        {
            title: 'States',
            table: 'sta_clip',
            style: 'bing-dark-sta',
            visible: true
        },

    
    ],



    'bing-aerial': [

        {
            title: 'Census Blocks Groups', 
            table: 'bgp_clip', 
            style: 'bing-aerial-bgp',
            visible: true
        },

        {
            title: 'Census Blocks Groups Labels', 
            table: 'bgp_point_clip', 
            style: 'bing-aerial-bgp-label',
            visible: true
        },

        {
            title: 'Census Tract',
            table: 'trx_clip',
            style: 'bing-aerial-trx',
            visible: false
        },


        {
            title: 'Census Tract Labels',
            table: 'trx_point_clip',
            style: 'bing-aerial-trx-label',
            visible: false
        },


        {
            title: 'Census Place',
            table: 'pla_clip',
            style: 'bing-aerial-pla',
            visible: false
        },

        {
            title: 'Census Place Label',
            table: 'pla_label',
            style: 'bing-aerial-pla-label',
            visible: false
        },


        {
            title: 'MCD',
            table: 'mcd_clip',
            style: 'bing-aerial-mcd',
            visible: false
        },

        {
            title: 'MCD Label',
            table: 'mcd_label',
            style: 'bing-aerial-mcd-label',
            visible: false
        },



        {
            title: 'Combined Statistical Area',
            table: 'csa_clip',
            style: 'bing-aerial-csa',
            visible: false
        },



        {
            title: 'Combined Statistical Area',
            table: 'csa_label',
            style: 'bing-aerial-csa-label',
            visible: false
        },


        {
            title: 'Core Based Statistical Area',
            table: 'cbs_clip',
            style: 'bing-aerial-cbs',
            visible: false
        },



        {
            title: 'Core Based Statistical Area Label',
            table: 'cbs_label',
            style: 'bing-aerial-cbs-label',
            visible: false
        },





        {
            title: 'Zip Code',
            table: 'zp5_clip',
            style: 'bing-aerial-zp5',
            visible: true
        },


        {
            title: 'Zip Code Label',
            table: 'zp5_label',
            style: 'bing-aerial-zp5-label',
            visible: true
        },



        {
            title: 'Three digit zip code',
            table: 'tdz_clip',
            style: 'bing-aerial-tdz',
            visible: true
        },



        {
            title: 'Three digit zip code',
            table: 'tdz_label',
            style: 'bing-aerial-tdz-label',
            visible: true
        },



        {
            title: 'County',
            table: 'cty_clip',
            style: 'bing-aerial-cty',
            visible: true
        },


        {
            title: 'County Label',
            table: 'cty_point_clip',
            style: 'bing-aerial-cty-label',
            visible: true
        },



        {
            title: 'Nielsen Designated Area',
            table: 'dma_clip',
            style: 'bing-aerial-dma',
            visible: false
        },


        {
            title: 'Nielsen Designated Area Label',
            table: 'dma_label',
            style: 'bing-aerial-dma-label',
            visible: false
        },


        {
            title: 'States',
            table: 'sta_clip',
            style: 'bing-aerial-sta',
            visible: true
        },

    
    ],



    'bing-road': [

        {
            title: 'Census Blocks Groups', 
            table: 'bgp_clip', 
            style: 'bing-road-bgp',
            visible: true
        },

        {
            title: 'Census Blocks Groups Labels', 
            table: 'bgp_point_clip', 
            style: 'bing-road-bgp-label',
            visible: true
        },

        {
            title: 'Census Tract',
            table: 'trx_clip',
            style: 'bing-road-trx',
            visible: false
        },


        {
            title: 'Census Tract Labels',
            table: 'trx_point_clip',
            style: 'bing-road-trx-label',
            visible: false
        },


        {
            title: 'Census Place',
            table: 'pla_clip',
            style: 'bing-road-pla',
            visible: false
        },

        {
            title: 'Census Place Label',
            table: 'pla_label',
            style: 'bing-road-pla-label',
            visible: false
        },


        {
            title: 'MCD',
            table: 'mcd_clip',
            style: 'bing-road-mcd',
            visible: false
        },

        {
            title: 'MCD Label',
            table: 'mcd_label',
            style: 'bing-road-mcd-label',
            visible: false
        },

 


 

        {
            title: 'Core Based Statistical Area',
            table: 'cbs_clip',
            style: 'bing-road-cbs',
            visible: false
        },



        {
            title: 'Core Based Statistical Area Label',
            table: 'cbs_label',
            style: 'bing-road-cbs-label',
            visible: false
        },



        {
            title: 'Combined Statistical Area',
            table: 'csa_clip',
            style: 'bing-road-csa',
            visible: false
        },



        {
            title: 'Combined Statistical Area Label',
            table: 'csa_label',
            style: 'bing-road-csa-label',
            visible: false
        },




        {
            title: 'Zip Code',
            table: 'zp5_clip',
            style: 'bing-road-zp5',
            visible: true
        },





        {
            title: 'Zip Code Label',
            table: 'zp5_label',
            style: 'bing-road-zp5-label',
            visible: true
        },



        {
            title: 'Three digit zip code',
            table: 'tdz_clip',
            style: 'bing-road-tdz',
            visible: true
        },



        {
            title: 'Three digit zip code',
            table: 'tdz_label',
            style: 'bing-road-tdz-label',
            visible: true
        },




        {
            title: 'County',
            table: 'cty_clip',
            style: 'bing-road-cty',
            visible: true
        },


        {
            title: 'County Label',
            table: 'cty_point_clip',
            style: 'bing-road-cty-label',
            visible: true
        },


        {
            title: 'Nielsen Designated Area',
            table: 'dma_clip',
            style: 'bing-road-dma',
            visible: false
        },


        {
            title: 'Nielsen Designated Area Label',
            table: 'dma_label',
            style: 'bing-road-dma-label',
            visible: false
        },


        {
            title: 'States',
            table: 'sta_clip',
            style: 'bing-road-sta',
            visible: true
        },

    ]


};

// var geoserver_url = 'http://localhost:8080/geoserver/wms';
var geoserver_url = 'http://nielsen.dev.opengeo.org:8080/geoserver/wms';

var load_map = function(options) {

    $('#map').height($(document).height() - 130);
    $('#map').width($(document).width() - 20);

    var mapKey = 'AhPr6BLPr7N4Y8xbymEkGJ338DXCuIz0BFUiwe655NvylmRUXcXKed-162H_cabU';

    map = new OpenLayers.Map('map', {
	projection: new OpenLayers.Projection('EPSG:900913'),
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        numZoomLevels: 20
    });

    var mapConfig = mapConfigs[options.map];

    $.each(mapConfig, function(key, value) {
        map.addLayer(new OpenLayers.Layer.WMS(
            value.title,
            geoserver_url,
            {
                layers: 'nielsen:' + value.table,
                styles: value.style,
                transparent: true
                //tiled: true
            },
            {
                isBaseLayer: false,
                gutter: 128,
                visibility: value.visible
            }
        ));
    });

    var info = $('#info');
    map.events.register('zoomend', map, function (evnt) {
        info.empty();
        info.append($('<p/>', {text: 'Scale: ' + map.getScale()}));
        info.append($('<p/>', {text: 'Zoom: ' + map.getZoom()}));
    });


    var road = new OpenLayers.Layer.Bing({
        name: "Bing Road",
        key: mapKey,
        type: "Road"
    });


    var aerial = new OpenLayers.Layer.Bing({
        name: "Bing Aerial",
        key: mapKey,
        type: "AerialWithLabels"
    });    

    // hack... i am a bad person

    if (options.base === 'aerial') {
        map.addLayer(aerial);
        map.addLayer(road);
    } else {
        map.addLayer(road);
        map.addLayer(aerial);
    };


    var layerControl = new OpenLayers.Control.LayerSwitcher();
    map.addControl(layerControl);


    var bounds = new OpenLayers.Bounds.fromArray( 
        [-8717814.7561989,4642087.2453562,-8429800.0336605,4779673.8962504]
    );

    map.zoomToExtent(bounds);


};
