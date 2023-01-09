import React from 'react';
import classes from './Field.module.scss';
import Cell from "../Cell/Cell";

type FieldProps = {
    cells: number
};

const Field = ({cells}: FieldProps) => {
    return (
        <div className={classes.field}>
            {
                [...Array(cells)].map((item, index) => {
                    return <Cell key={index} id={index} />
                })
            }
        </div>
    );
};

export default Field;
