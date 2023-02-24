import React, {useState} from 'react';

export function Table(props){
    const {parseCrimeData, county, date} = props;
    let crimeData = parseCrimeData;

    if(county != ""){
        crimeData = crimeData.filter((crime) => {
            return crime.MCPP == county
        })
    }

    if(date != null){
        crimeData = crimeData.filter((crime) => {
            return crime["Report DateTime"] == date
        })
    }

    let tableRow = crimeData.map((crime) => {
        
        return(
            <tr>
                <td>{crime["Report DateTIme"]}</td>
                <td>{crime.MCPP}</td>
                <td>{crime["Offense Parent Group"]}</td>
                <td>{crime.Offense}</td>
            </tr>
        )
    })


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