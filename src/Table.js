import React from 'react';

export function Table(props){
    const {parseCrimeData, county, date} = props;
    let crimeData = parseCrimeData;
    console.log(crimeData);

    if(county != ""){
        crimeData = crimeData.filter((crime) => {
            return crime.MCPP == county
        })
    }

    // if(date != null){
    //     crimeData = crimeData.filter((crime) => {
    //         return crime["Report DateTime"] == date
    //     })
    // }
    


    console.log(crimeData);

    let tableRow = crimeData.map((crime) => {
        
        return(
            <tr key={crime["Offense ID"]}>
                <td>{crime["Report DateTIme"]}</td>
                <td>{crime.MCPP}</td>
                <td>{crime["Offense Parent Group"]}</td>
                <td>{crime.Offense}</td>
            </tr>
        )
    })

    console.log(tableRow);


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