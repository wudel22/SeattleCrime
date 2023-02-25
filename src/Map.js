import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/api';
import _ from 'lodash'
import { useState } from 'react';
import Select from 'react-select'

// Filter the crime data by offense (or by all)
const containerStyle = {
    width: window.innerWidth,
    height: window.innerHeight
};

const center = {
    lat: 47.650017,
    lng: -122.30654
};

const markerCenters = {

}

const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#71797E",
        // match with the menu
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        // Overwrites the different states of border
        borderColor: state.isFocused ? "white" : "#adb5bd",
        // Removes weird border around container
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
    const [currCrime, setCrime] = useState({ value: "DRUG/NARCOTIC OFFENSES", label: "Drug/narcotic offenses" });   // stores current selected crime group
    const crimeKeysRed = _.groupBy(crimes, 'Offense Parent Group');  // groups all crimes by offense parent groups
    const crimeKeys = Object.keys(crimeKeysRed);  // stores all unique offense parent groups of crimes that occurred
    let crimeOptions = [];  // stores all results from filter
    
    const filteredCrimes = crimes.filter(function (byCrime) {         // filters and stores crime by currently chosen crime group 
        return byCrime['Offense Parent Group'] === currCrime.value;
    });


    console.log(filteredCrimes);
    console.log(currCrime);

    // Changes the current crime group chosen on user input/selection from dropdown
    const handleChange = (crime) => {
        setCrime(crime);
        if (props.onChange) {
            props.onChange(crime);
          }
      };

    // Organizes data so it's readable by React select
    for (let i = 0; i < crimeKeys.length; i++) {
        let stylized = crimeKeys[i].charAt(0) + crimeKeys[i].substring(1).toLowerCase();        // stylizes crime names so not all uppercase
        crimeOptions.push({
            value: crimeKeys[i],
            label: stylized,
        });
    }

    return (
        // search box
        <div>
            <Select
                value={currCrime}
                placeholder="Search a crime"
                label="Single select"
                options={crimeOptions}
                onChange={(option) => handleChange(option)}
                styles={customStyles}
            />
        </div>
    );
}

// export function Map(props) {
//   return (
//     <div>
//     <LoadScript
//       googleMapsApiKey="AIzaSyApVWOi_L7Do8rTkoGZdUuDrBIZcah4dKE"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={16}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//     </div>
//   );
// }