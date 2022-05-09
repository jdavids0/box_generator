import React, { useState } from 'react'

const DisplayBox = (props) => {

    const { color, height } = props;
    const boxStyle = { backgroundColor: color, height: height + "px", width: height + "px" };

    return(
        <>
        <div className="d-flex flex-wrap mx-auto col-8 display">
                <div className="m-2" style={ boxStyle }>

                </div>
        </div>
        </>
    )
}

export default DisplayBox;