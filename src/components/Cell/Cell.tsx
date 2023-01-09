import React, {useState, useCallback} from 'react';
import classes from './Cell.module.scss';

type CellProps = {
    id: number
};

const Cell = ({id}: CellProps) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = useCallback(
        () => setVisible(!visible),
        [setVisible]
    );

    return (
        <div
            className={classes.cell}
            onClick={toggleVisible}>
            <h2>{id + 1}</h2>
        </div>
    );
};

export default Cell;