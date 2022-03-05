var wms_layers = [];


        var lyr_CartoPositron_0 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_alcaldias_1 = new ol.format.GeoJSON();
var features_alcaldias_1 = format_alcaldias_1.readFeatures(json_alcaldias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcaldias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcaldias_1.addFeatures(features_alcaldias_1);
var lyr_alcaldias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alcaldias_1, 
                style: style_alcaldias_1,
                interactive: true,
                title: '<img src="styles/legend/alcaldias_1.png" /> alcaldias'
            });
var format_enero2022_2 = new ol.format.GeoJSON();
var features_enero2022_2 = format_enero2022_2.readFeatures(json_enero2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enero2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enero2022_2.addFeatures(features_enero2022_2);
var lyr_enero2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_enero2022_2, 
                style: style_enero2022_2,
                interactive: true,
                title: '<img src="styles/legend/enero2022_2.png" /> enero 2022'
            });
var format_febrero2022_3 = new ol.format.GeoJSON();
var features_febrero2022_3 = format_febrero2022_3.readFeatures(json_febrero2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_febrero2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_febrero2022_3.addFeatures(features_febrero2022_3);
var lyr_febrero2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_febrero2022_3, 
                style: style_febrero2022_3,
                interactive: true,
                title: '<img src="styles/legend/febrero2022_3.png" /> febrero 2022'
            });
var format_09ent_4 = new ol.format.GeoJSON();
var features_09ent_4 = format_09ent_4.readFeatures(json_09ent_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09ent_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09ent_4.addFeatures(features_09ent_4);
var lyr_09ent_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_09ent_4, 
                style: style_09ent_4,
                interactive: true,
                title: '<img src="styles/legend/09ent_4.png" /> 09ent'
            });
var format_sectores_5 = new ol.format.GeoJSON();
var features_sectores_5 = format_sectores_5.readFeatures(json_sectores_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_5.addFeatures(features_sectores_5);
var lyr_sectores_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_5, 
                style: style_sectores_5,
                interactive: true,
                title: '<img src="styles/legend/sectores_5.png" /> sectores'
            });

lyr_CartoPositron_0.setVisible(true);lyr_alcaldias_1.setVisible(true);lyr_enero2022_2.setVisible(true);lyr_febrero2022_3.setVisible(true);lyr_09ent_4.setVisible(true);lyr_sectores_5.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_alcaldias_1,lyr_enero2022_2,lyr_febrero2022_3,lyr_09ent_4,lyr_sectores_5];
lyr_alcaldias_1.set('fieldAliases', {'gid': 'gid', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', 'ge_lcld': 'ge_lcld', 'nmbr_pp': 'nmbr_pp', 'zona': 'zona', });
lyr_enero2022_2.set('fieldAliases', {'fechanc': 'fechanc', 'fechhch': 'fechhch', 'horahch': 'horahch', 'resumen': 'resumen', 'ctgr_dl': 'ctgr_dl', 'delito': 'delito', 'id_dlt_': 'id_dlt_', 'ge_sctr': 'ge_sctr', 'alcldhc': 'alcldhc', 'ct_hchs': 'ct_hchs', 'calle': 'calle', 'clnhchs': 'clnhchs', 'lgr_cms': 'lgr_cms', 'geox': 'geox', 'geoy': 'geoy', 'cve_dlt': 'cve_dlt', 'periodo': 'periodo', });
lyr_febrero2022_3.set('fieldAliases', {'fechanc': 'fechanc', 'fechhch': 'fechhch', 'horahch': 'horahch', 'resumen': 'resumen', 'ctgr_dl': 'ctgr_dl', 'delito': 'delito', 'id_dlt_': 'id_dlt_', 'ge_sctr': 'ge_sctr', 'alcldhc': 'alcldhc', 'ct_hchs': 'ct_hchs', 'calle': 'calle', 'clnhchs': 'clnhchs', 'lgr_cms': 'lgr_cms', 'geox': 'geox', 'geoy': 'geoy', 'cve_dlt': 'cve_dlt', 'periodo': 'periodo', 'Anio': 'Anio', 'dispscn': 'dispscn', 'recuprd': 'recuprd', 'sujetos': 'sujetos', });
lyr_09ent_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_sectores_5.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegcn': 'delegcn', 'zona': 'zona', 'cve_zon': 'cve_zon', 'cnsc_rg': 'cnsc_rg', 'cnsc_sc': 'cnsc_sc', 'nmbr_sc': 'nmbr_sc', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_lcld': 'id_lcld', });
lyr_alcaldias_1.set('fieldImages', {'gid': 'Range', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'cve_mun': 'TextEdit', 'nomgeo': 'TextEdit', 'ge_lcld': 'Range', 'nmbr_pp': 'TextEdit', 'zona': 'TextEdit', });
lyr_enero2022_2.set('fieldImages', {'fechanc': 'DateTime', 'fechhch': 'DateTime', 'horahch': 'TextEdit', 'resumen': 'TextEdit', 'ctgr_dl': 'TextEdit', 'delito': 'TextEdit', 'id_dlt_': 'Range', 'ge_sctr': 'TextEdit', 'alcldhc': 'TextEdit', 'ct_hchs': 'TextEdit', 'calle': 'TextEdit', 'clnhchs': 'TextEdit', 'lgr_cms': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'cve_dlt': 'TextEdit', 'periodo': 'TextEdit', });
lyr_febrero2022_3.set('fieldImages', {'fechanc': 'DateTime', 'fechhch': 'DateTime', 'horahch': 'TextEdit', 'resumen': 'TextEdit', 'ctgr_dl': 'TextEdit', 'delito': 'TextEdit', 'id_dlt_': 'Range', 'ge_sctr': 'TextEdit', 'alcldhc': 'TextEdit', 'ct_hchs': 'TextEdit', 'calle': 'TextEdit', 'clnhchs': 'TextEdit', 'lgr_cms': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'cve_dlt': 'TextEdit', 'periodo': 'TextEdit', 'Anio': 'Range', 'dispscn': 'TextEdit', 'recuprd': 'TextEdit', 'sujetos': 'TextEdit', });
lyr_09ent_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_sectores_5.set('fieldImages', {'gid': 'Range', 'id': 'TextEdit', 'delegcn': 'TextEdit', 'zona': 'TextEdit', 'cve_zon': 'TextEdit', 'cnsc_rg': 'TextEdit', 'cnsc_sc': 'TextEdit', 'nmbr_sc': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_lcld': 'Range', });
lyr_alcaldias_1.set('fieldLabels', {'gid': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'inline label', 'ge_lcld': 'inline label', 'nmbr_pp': 'header label', 'zona': 'no label', });
lyr_enero2022_2.set('fieldLabels', {'fechanc': 'inline label', 'fechhch': 'inline label', 'horahch': 'no label', 'resumen': 'inline label', 'ctgr_dl': 'inline label', 'delito': 'no label', 'id_dlt_': 'no label', 'ge_sctr': 'no label', 'alcldhc': 'no label', 'ct_hchs': 'no label', 'calle': 'no label', 'clnhchs': 'no label', 'lgr_cms': 'no label', 'geox': 'no label', 'geoy': 'no label', 'cve_dlt': 'no label', 'periodo': 'no label', });
lyr_febrero2022_3.set('fieldLabels', {'fechanc': 'inline label', 'fechhch': 'inline label', 'horahch': 'no label', 'resumen': 'inline label', 'ctgr_dl': 'no label', 'delito': 'no label', 'id_dlt_': 'no label', 'ge_sctr': 'no label', 'alcldhc': 'no label', 'ct_hchs': 'no label', 'calle': 'no label', 'clnhchs': 'no label', 'lgr_cms': 'no label', 'geox': 'no label', 'geoy': 'no label', 'cve_dlt': 'no label', 'periodo': 'no label', 'Anio': 'no label', 'dispscn': 'no label', 'recuprd': 'no label', 'sujetos': 'no label', });
lyr_09ent_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_sectores_5.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegcn': 'no label', 'zona': 'no label', 'cve_zon': 'no label', 'cnsc_rg': 'no label', 'cnsc_sc': 'no label', 'nmbr_sc': 'inline label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_lcld': 'no label', });
lyr_sectores_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});