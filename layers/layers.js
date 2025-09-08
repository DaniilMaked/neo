var wms_layers = [];


        var lyr_OSMDeutschland_0 = new ol.layer.Tile({
            'title': 'OSM Deutschland',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.de/{z}/{x}/{y}.png'
            })
        });
var format_20242025_1 = new ol.format.GeoJSON();
var features_20242025_1 = format_20242025_1.readFeatures(json_20242025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20242025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20242025_1.addFeatures(features_20242025_1);
var lyr_20242025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20242025_1, 
                style: style_20242025_1,
                popuplayertitle: 'Мероприятия 2024-2025',
                interactive: true,
    title: 'Мероприятия 2024-2025<br />\
    <img src="styles/legend/20242025_1_0.png" /> Библиотека<br />\
    <img src="styles/legend/20242025_1_1.png" /> Школа<br />\
    <img src="styles/legend/20242025_1_2.png" /> Детский сад<br />' });

lyr_OSMDeutschland_0.setVisible(true);lyr_20242025_1.setVisible(true);
var layersList = [lyr_OSMDeutschland_0,lyr_20242025_1];
lyr_20242025_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'Adress': 'Adress', 'Type': 'Type', 'latitude': 'latitude', 'longitude': 'longitude', 'Сайт/Вк': 'Сайт/Вк', 'ФИО/должность': 'ФИО/должность', 'Номер/ссылка на соцсети': 'Номер/ссылка на соцсети', 'Почта': 'Почта', 'Комментарии': 'Комментарии', 'Были в 2024-2025 гг (да = 1)': 'Были в 2024-2025 гг (да = 1)', 'Latitude_1': 'Latitude_1', 'Longitude_1': 'Longitude_1', 'Google': 'Google', 'Longi': 'Longi', 'Lati': 'Lati', 'field_18': 'field_18', 'Longi_1': 'Longi_1', 'Lati_1': 'Lati_1', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', });
lyr_20242025_1.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'Adress': 'TextEdit', 'Type': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Сайт/Вк': 'TextEdit', 'ФИО/должность': 'TextEdit', 'Номер/ссылка на соцсети': 'TextEdit', 'Почта': 'TextEdit', 'Комментарии': 'TextEdit', 'Были в 2024-2025 гг (да = 1)': 'CheckBox', 'Latitude_1': 'TextEdit', 'Longitude_1': 'TextEdit', 'Google': 'TextEdit', 'Longi': 'TextEdit', 'Lati': 'TextEdit', 'field_18': 'TextEdit', 'Longi_1': 'TextEdit', 'Lati_1': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', });
lyr_20242025_1.set('fieldLabels', {'id': 'no label', 'name': 'inline label - visible with data', 'Adress': 'no label', 'Type': 'inline label - visible with data', 'latitude': 'no label', 'longitude': 'no label', 'Сайт/Вк': 'no label', 'ФИО/должность': 'no label', 'Номер/ссылка на соцсети': 'no label', 'Почта': 'no label', 'Комментарии': 'no label', 'Были в 2024-2025 гг (да = 1)': 'no label', 'Latitude_1': 'no label', 'Longitude_1': 'no label', 'Google': 'no label', 'Longi': 'no label', 'Lati': 'no label', 'field_18': 'no label', 'Longi_1': 'no label', 'Lati_1': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', });
lyr_20242025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});