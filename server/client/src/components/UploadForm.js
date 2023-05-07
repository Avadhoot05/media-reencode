import React from 'react'
import { BytesToMB } from '../utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UploadForm({onChangeHandler, onSubmitHandler}) {

    const onChange = e => {
        const file = e.target.files[0];
        console.log("size", BytesToMB(file.size));
        
        if(BytesToMB(file.size) > 200)
        {
            toast.warn("file exceeded 200MB");
            return;
        }
            
        onChangeHandler(e);
    }

    const onSubmit = e => {
        e.preventDefault();
        onSubmitHandler(e);
    }


    return (
        <>
            <input type="file" name="file" onChange={onChange}/>
            <button type="button" className="btn btn-success btn-block" onClick={onSubmit}>Upload</button>
        </>
  )
}

export default UploadForm;