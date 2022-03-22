import React, { Component } from 'react'
import tabele from './tabele.json'
import './DoBazyDanych.css'
class DoBazyDanych extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const test = tabele.tabele.map(tabela => {
            const columns = tabela.pola.map(pole => {
                return <>column {pole} HEADING {pole.slice(pole.indexOf("_") + 1, pole.length).toLocaleUpperCase()} for {pole.indexOf("ID") === -1 ? "A50" : 9999}<br /></>
            })
            const triggers = (
                <>
                    {`create or replace trigger T_BI_${tabela.nazwa}`}<br />
                    {`before insert on `}<br />
                    {`for each row`}<br />
                    {`\tbegin`}<br />
                    {`\t\tif :new.${tabela.pola[0]} is NULL then`}<br />
                    {`\t\t\tSELECT SEQ_DB1_${tabela.nazwa}.nextval INTO :new.${tabela.pola[0]} FROM dual;`}<br />
                    {`\t\tend if;`}<br />
                    {`end;`}<br />
                    {`/ `}<br />
                    <br />
                </>
            )
            const amount = tabela.pola.map((tabela, index, tablica) => {
                if (index < tablica.length - 2) {
                    return (
                        <>
                            ","
                        </>
                    )
                }
                return null
            })
            const inserts = (
                <>
                    {`------------------------`}<br />
                    {`-- DML bd1_${tabela.nazwa}`}<br />
                    {`------------------------`}<br />
                    <br />
                    {`insert into bd1_${tabela.nazwa}("${tabela.pola.join('","')}")`}<br />
                    {`values (1,"`}{amount}{`")`}<br />
                    <br />
                    {`insert into bd1_${tabela.nazwa}("${tabela.pola.join('","')}")`}<br />
                    {`values (2,"`}{amount}{`")`}<br />
                    <br />
                    {columns}
                    <br />
                    {`select * from  bd1_${tabela.nazwa}`}
                    <br />
                    <br />
                </>
            )

            return (
                <div key={tabela.nazwa} className="code">
                    {/* {triggers} */}
                    {/* {dropSequences} */}
                </div>
            )
        })
        return (
            <>
                {test}
            </>
        );
    }
}

export default DoBazyDanych;