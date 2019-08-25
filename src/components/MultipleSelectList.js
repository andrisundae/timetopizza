import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

import styles from '../common/theming';

class MultiSelectList extends Component {


    _keyExtractor = (item) => item.id;

    
    _renderItem = ({item}) => {
        return (
            <Checkbox
                id={item.id}
                onSelect={this.props.onSelect}
                label={item.name}
                selected={item.selected}
                disabled={item.disabled}
            />
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this._renderItem}
                numColumns={3}
                style={styles.toppingContainer}
                keyExtractor={this._keyExtractor}
                extraData={this.props}
            />
        );
    }
}

export default MultiSelectList;

MultiSelectList.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func,
}