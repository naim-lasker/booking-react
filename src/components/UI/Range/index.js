import React, { useState } from "react"
import PropTypes from "prop-types"
import InputRange from 'react-input-range';

const MultiRange = () => {
    const [value, setValue] = useState({ min: 2, max: 10 })

    console.log('value', value);
    return (
        <InputRange
            maxValue={20}
            minValue={0}
            value={value}
            onChange={(value) => setValue( value )}
        />
    )
}

// MultiRange.propTypes = {
//     icon: PropTypes.object.isRequired,
//     names: PropTypes.array.isRequired,
// }

export default MultiRange
