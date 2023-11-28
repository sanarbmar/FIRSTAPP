import React from 'react'

const SProduct = (Image, Description) => {
    return (

        <div className="card shadow-sm">
            <img src={Image} alt='' />

            <div className="card-body">
                <p>
                    <p>{Description}</p>
                </p>
            </div>
        </div>
    )
}

export default SProduct