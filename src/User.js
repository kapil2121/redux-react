import React from 'react';

const User = (props) => {
    console.log('props::',props.data.name);
    const {data} = props;
    return(
        <div>
            <h1>User Component</h1>
            {data.name}
            {data.age}
        </div>
    )
}

export default User;