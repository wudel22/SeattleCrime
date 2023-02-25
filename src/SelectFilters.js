// import React from 'react'
// import { useState } from 'react';
// import Select from 'react-select'

// // Custom styles for searchbox
// const customStyles = {
//     control: (base, state) => ({
//         ...base,
//         background: "white",
//         // match with the menu
//         borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
//         // Overwrites the different states of border
//         borderColor: state.isFocused ? "white" : "grey",
//         // Removes weird border around container
//         boxShadow: state.isFocused ? null : null,
//     }),
//     menu: base => ({
//         ...base,
//         borderRadius: 0,
//         marginTop: 0
//     }),
//     menuList: base => ({
//         ...base,
//         padding: 0
//     })
// };

// export function SearchBox(props) {

//     let [currCrime, setCrime] = useState({ value: "DRUG/NARCOTIC OFFENSES", label: "Drug/narcotic offenses" });
//     // state = {
//     //     value: "",
//     //     label: "",
//     // }

//     // const handleChange = (crime) => {
//     //     // console.log(crime);
//     //     setCrime(crime);
//     //     if (props.onChange) {
//     //         props.onChange(crime.value);
//     //       }
//     //   };

//     const handleChange = (crime) => {
//         // console.log(crime);
//         setCrime(crime);
//         if (props.onChange) {
//             props.onChange(crime);
//           }
//       };


//     let crimeOptions = [];

//     for (let i = 0; i < props.crimeKeys.length; i++) {
//         let stylized = props.crimeKeys[i].charAt(0) + props.crimeKeys[i].substring(1).toLowerCase();        // stylizes crime names so not all uppercase
//         crimeOptions.push({
//             value: props.crimeKeys[i],
//             label: stylized,
//         });
//     }

//     // console.log(currCrime);
//     return (
//         <div>
//             <Select
//                 value={currCrime}
//                 placeholder="Search a crime"
//                 label="Single select"
//                 options={crimeOptions}
//                 onChange={(option) => handleChange(option)}
//                 styles={customStyles}
//             />
//         </div>
//     );
// }