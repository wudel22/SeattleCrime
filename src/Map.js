import React from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import _ from 'lodash'
import { useState } from 'react';
import Select from 'react-select'

// Filter the crime data by offense (or by all)
const containerStyle = {
    width: "100%",
    height: window.innerHeight
};

const center = {
    lat: 47.650017,
    lng: -122.30654
};

const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#71797E",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: state.isFocused ? "white" : "#adb5bd",
        boxShadow: state.isFocused ? null : null,
    }),
    singleValue: base => ({
        ...base,
        color: "white",
    }),
    menu: base => ({
        ...base,
        background: "#C0C0C0",
        color: "black",
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    })
};

export function Map(props) {
    const crimes = props.crimeData;   // stores all crimes from props
    const crimeKeysRed = _.groupBy(crimes, 'offense_parent_group');  // groups all crimes by offense parent groups
    const crimeKeys = Object.keys(crimeKeysRed);  // stores all unique offense parent groups of crimes that occurred
    const [currCrime, setCrime] = useState({ value: "LARCENY-THEFT", label: "Larceny-theft" });   // stores current selected crime group
    let crimeOptions = [];  // stores all results from filter

    const addKey = (obj, res, key) => {
        res[key] = obj[key]
        return res
    };

    Object.filter = (obj, predicate) =>
        Object.keys(obj)
            .filter(key => predicate(obj[key]))
            .reduce((res, key) => addKey(obj, res, key), {});

    // console.log(crimes);
    // console.log(typeof(crimes));
    // console.log(crimeKeysRed);

    const filteredCrimes = Object.filter(crimes, function (byCrime) {         // filters and stores crime by currently chosen crime group 
        return byCrime['offense_parent_group'] === currCrime.value;
    });


    // console.log(filteredCrimes);
    // console.log(currCrime);

    // Changes the current crime group chosen on user input/selection from dropdown
    const handleChange = (crime) => {
        setCrime(crime);
    };

    // Organizes data so it's readable by React select
    for (let i = 0; i < crimeKeys.length; i++) {
        let stylized = crimeKeys[i].charAt(0) + crimeKeys[i].substring(1).toLowerCase();        // stylizes crime names so not all uppercase
        crimeOptions.push({
            value: crimeKeys[i],
            label: stylized,
        });
    }

    // const testLocations = props.testLocations;
    // console.log(testLocations);

    const [infoWindowID, setInfoWindowID] = useState("");
    let markers;

    const arrayFilteredCrimes = Object.entries(filteredCrimes).map(([id, obj]) => ({ id, ...obj }));

    // make map markers to be placed on the map using the latitude and longitude from the crime data
    if (filteredCrimes !== null) {
        markers = arrayFilteredCrimes.map((location, i) => {
            const pos = { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) };
            const index = i + 1;
            const crimeDet = location.offense;
            const crimeDate = location.report_datetime;
            return (
                <MarkerF
                    key={index}
                    position={pos}
                    onClick={() => {
                        setInfoWindowID(index);
                        // console.log(infoWindowID)
                        // console.log(index)
                    }}
                >
                    {/* make the infowindows for the map markers */}
                    {infoWindowID === index && (
                        <InfoWindowF>
                            <div className="text-dark">
                                <p>Date: {crimeDate}</p>
                                <p>Details: {crimeDet}</p>
                            </div>
                        </InfoWindowF>
                    )}
                </MarkerF>
            );
        });
    }

    return (
        // search box
        <div>
            <div className="d-flex justify-content-center">
                <div className='container mb-5'>
                    <Select
                        value={currCrime}
                        placeholder="Search a crime"
                        label="Single select"
                        options={crimeOptions}
                        onChange={(option) => handleChange(option)}
                        styles={customStyles}
                    />
                </div>
            </div>

            {/* map */}
            <div className='w-100'>
                <LoadScript
                    googleMapsApiKey="AIzaSyApVWOi_L7Do8rTkoGZdUuDrBIZcah4dKE"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        {markers}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}