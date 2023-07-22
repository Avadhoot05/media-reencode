import React, {ChangeEvent} from 'react'
import { BytesToMB } from '../utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from '@mui/material';


interface Props {
    onChangeHandler: (e: ChangeEvent) => void
}

function FileUpload(props : Props) {

    const {onChangeHandler} = props;

    const HandleFileChange = (e :  ChangeEvent<HTMLInputElement>)  => {
        const file = e.target.files[0];
        console.log("size", BytesToMB(file.size));
        
        if(BytesToMB(file.size) > 200)
        {
            toast.warn("file exceeded 200MB");
            e.target.value = "";
            return;
        }
            
        onChangeHandler(e);
    }

    return (
        <>
            <TextField
                type="file"
                onChange={HandleFileChange}
                style={{ width: '100%' }}
                inputProps={{ accept: 'video/*' }}
            />
        </>
  )
}

export default FileUpload;