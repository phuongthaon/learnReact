import React from 'react';
import PropTypes from 'prop-types';

TodoItems.propTypes = {
    
};

function TodoItems({item}) {
    return (
        <div className='items'>
            <p>{item.name}</p>
        </div>
    );
}

export default TodoItems;