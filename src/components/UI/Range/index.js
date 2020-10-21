import React from "react"
import PropTypes from "prop-types"
import InputRange from 'react-input-range';

const MultiRange = ({maxValue, minValue, value, onChange}) => {

    console.log('value', value);
    return (
        <InputRange
            maxValue={maxValue}
            minValue={minValue}
            value={value}
            onChange={onChange}
        />
    )
}

// MultiRange.propTypes = {
//     icon: PropTypes.object.isRequired,
//     names: PropTypes.array.isRequired,
// }

export default MultiRange
