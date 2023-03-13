import React from 'react';

//The Table function returns table with the crime data that matches the chosen county 

export function Table(props){
    const {parseCrimeData, county, date} = props;
    let crimeData = parseCrimeData;
    //console.log(crimeData);



    if (county != ""){
        crimeData = crimeData.filter((crime) => {
            return crime.mcpp == county;
        })
    }



    let tableRow = crimeData.map((crime) => {
        
        return(
            <tr key={crime["offense_id"]}>
                <td>{crime["report_datetime"]}</td>
                <td>{crime.mcpp}</td>
                <td>{crime["offense_parent_group"]}</td>
                <td>{crime.offense}</td>
            </tr>
        )
    })

   // console.log(tableRow);


    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>County</th>
                    <th>Offense Group</th>
                    <th>Offense</th>
                </tr>
            </thead>
            <tbody>{tableRow}</tbody>
        </table>
    )
}