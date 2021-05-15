import React, {useState} from 'react';

const ErrorExample = () => {

    const [title, setTitle] = useState("Error Example Title");

    const handleClick = () => {
        setTitle("Title has been changed")
    }

    return (
        <React.Fragment>
            <h1>{title}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    )
}

export default ErrorExample;