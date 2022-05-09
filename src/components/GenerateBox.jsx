import React, { useState } from 'react'

const GenerateBox = (props) => {
    const [currentColor, setCurrentColor] = useState('');
    const [currentHeight, setCurrentHeight] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const newBox = { color: currentColor, height: currentHeight};
        
        props.onNewBox( newBox );
        setCurrentColor('');
        setCurrentHeight('');
    }

    return(
        <form className="header" onSubmit={ handleSubmit } >
            <>
            <h1>Welcome to the BOX GENERATOR</h1>
            <div className="input">
                <input type="text" className="form-control m-2 w-20" placeholder="Plz enter color here!" name="color" onChange = { (e) => setCurrentColor(e.target.value) } value={ currentColor }/>
                <input type="number" className="form-control m-2 w-20" placeholder="Plz enter box size here!" name="height" min="0" max="100" onChange={ (e) => setCurrentHeight(e.target.value) } value={ currentHeight } />
                <input type="submit" value="GENERATE BOX!" className="btn btn-danger m-2" />
            </div>

            </>
        </form>
    )
}

export default GenerateBox;