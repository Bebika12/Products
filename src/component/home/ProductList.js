import React from 'react';
import {Link } from 'react-router-dom';

const showLatest = ({latestData}) => {
    if(latestData){
        return latestData.map((data) => {
            return(
                <div key={data.id}>
                    <div>
                        <div>
                            <img src={data.img}/>
                            <div>{data.id}</div>
							 <div>{data.name}</div>
							 <div>{data.description}</div>
                        </div>
                    </div>
                </div> 
            )
        })
    }
}

const ProductList = (props) => {
    return(
        <div >
            {showLatest(props)}
        </div>
    )
}

export default ProductList;