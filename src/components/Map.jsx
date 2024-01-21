import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import { features } from './data/data.json';
import "../App.css";
import L from 'leaflet';

const MTLMap = () => {
    const mapStyle = {
        height: '100vh',
        width: '100%',
        margin: '0 auto',
    }
    // console.log(features);
    const feature = features.map(feature=> {
        return feature;
    });
    return (
        <div className='container'>
            <div className="">
                <div className="">
                    <MapContainer center={[45.5500, -73.7000]}
                        zoom={11} scrollWheelZoom={true} style={mapStyle}>
                        <TileLayer
                            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        />
                        {features && (
                            <GeoJSON data={features}
                            />)}
                        <GeoJSON data={features} />
                    </MapContainer>
                </div>
            </div>
            <script src="/js/leaflet-0.7.2/leaflet.ajax.min.js"></script>
        </div>
    )
}

export default MTLMap;
