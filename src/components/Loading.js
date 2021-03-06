import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <div className="spinner-container">
            <Spinner animation="grow" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading;