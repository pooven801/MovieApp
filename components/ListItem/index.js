import * as React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';


export default function ListItem(props) {
  const {imageThumb, title, popularity, onPress} = props;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
        }}>
        {imageThumb != null ? (
          <Image
            style={styles.imageStyle}
            source={{uri: imageBaseUrl + imageThumb}}
          />
        ) : (
          <View
            style={[
              styles.imageStyle,
              {
                backgroundColor: 'green',
                justifyContent: 'center',
              },
            ]}>
            <Text style={{color: 'white', fontSize: 50, alignSelf: 'center'}}>
              !
            </Text>
          </View>
        )}
        <View style={{width: '60%', marginLeft: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            {title}
          </Text>
          <Text
            style={styles.subTitle}>
            Popularity: {popularity}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  imageThumb: PropTypes.string,
  title: PropTypes.string,
  popularity: PropTypes.string,
  onPress: PropTypes.func
};

ListItem.defaultProps = {
  imageThumb: null,
  title: 'No Title',
  popularity: '0',
  onPress: () => {}
};
