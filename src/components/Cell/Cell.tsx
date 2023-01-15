import React, {useState, useCallback} from 'react';
import classes from './Cell.module.scss';

type CellProps = {
    id: number
};

const Cell = ({id}: CellProps) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            setVisible(prevState => !prevState);
        },
        [setVisible]
    );

    return (
        <div
            className={classes.cell}
            onClick={toggleVisible}>
            <h2 className={visible ? classes.visible: classes.hidden}>
                {id}
            </h2>
        </div>
    );
};

export default Cell;