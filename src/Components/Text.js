import React from 'react';
import PropTypes from 'prop-types';


function Text (props){
    const {isHeader, text} = props;
    retrun isHeader ? <h4>{text}</h4> : <p>{text}</p>
}

export default Text;
Text.propTypes = {
    text: PropTypes.oneOfType({
    PropTypes.string.isRequired,
    PropTypes.numbers.isRequired
    }),
isHeader: PropTypes.bool.isRequired
}