import React, { useState } from 'react'

const GenerateBox = (props) => {
    const [boxInfo, setBoxInfo] = useState({
        color:'',
        height:'',
    })

    const [boxList, setBoxList] = useState([]);

    const changeHandler = (e) => {
        let {...copyInfo} = boxInfo;

        // setting state variable to copy of current state variable obj plus new entry where key is prop name (so input element needs name with same value as prop) and value is input
        setBoxInfo({...copyInfo, [e.target.name]: e.target.value});
        console.log(boxInfo);

    }

    const submitHandler = (e) => {

        e.preventDefault();

        let newBox = boxInfo;
        // adding new box to box list
        setBoxList(boxList => [...boxList, newBox])
        console.log(boxList);

        // clearing form inputs after submission
        setBoxInfo({
            color: '', 
            height: ''
        });
        
    }

    return(
        <>
        <form className="header" onSubmit={ submitHandler } >
                <h1>Welcome to the BOX GENERATOR</h1>
                <div className="input">
                    <input type="text" className="form-control m-2 w-20" placeholder="Plz enter color here!" name="color" onChange = { changeHandler } value={ boxInfo.color }/>
                    <input type="number" className="form-control m-2 w-20" placeholder="Plz enter box size here!" name="height" step="20" min="100" max="500" onChange={ changeHandler } value={ boxInfo.height } />
                    <input type="submit" value="GENERATE BOX!" className="btn btn-danger m-2" />
                </div>

            </form>
            <hr />
            <div class="box-list d-flex flex-wrap justify-content-center gap-2">
                {
                    boxList.map((boxObj, idx)=> {
                        return (
                            <div key={idx} className="box" style={{backgroundColor: boxObj.color, height: boxObj.height + "px", width: boxObj.height + "px"}}>
                            </div>
                        )
                    })

                }
            </div>
        </>

    )
}

export default GenerateBox;