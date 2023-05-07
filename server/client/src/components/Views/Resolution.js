import React from 'react'
import UploadForm from '../UploadForm'

function Resolution() {

    const onChangeHandler = e => {

    }

    const onSubmitHandler = e => {
        e.preventDefault();

    }

    return (

        <UploadForm 
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}>
        </UploadForm>
  )
}

export default Fps;