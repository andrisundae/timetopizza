import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg'

function CheckedSvg({width, height, color, path, viewBox}) {
    return (
        <Svg
            width={width}
            height={height}
            fill={color}
            stroke={color}
            viewBox={viewBox}
        >
            <Path d={path}/>
        </Svg>
    )
}



CheckedSvg.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    viewBox: PropTypes.string,
    path: PropTypes.string,
}

CheckedSvg.defaultProps = {
    viewBox: '0 0 96 96',
    height: '30',
    width: '30',
}

export default CheckedSvg;
