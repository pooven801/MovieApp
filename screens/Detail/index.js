import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import * as Services from '@services';
import {ScrollView} from 'react-native-gesture-handler';

const Detail = ({route, navigation}) => {
  const [data, setData] = useState();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    Services.getDetail(
      `/${route?.params?.id}?api_key=328c283cd27bd1877d9080ccb1604c91`,
    ).then(res => {
      setData(res);
    });
  }, []);

  const boxItem = (title, arrayItem, notArray) => {
    return (
      <View style={styles.boxContainer}>
        <Text style={styles.boxText}>{title}</Text>
        {notArray == true ? (
          <Text style={{color: 'white', fontSize: 14}}>{arrayItem} mins</Text>
        ) : (
          arrayItem.map(item => (
            <Text style={{color: 'white', fontSize: 14}}>~ {item.name}</Text>
          ))
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{height: '100%', color: 'white'}}
        bounces={false}
        scrollEventThrottle={8}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 40, color: 'green', marginLeft: 20}}>
            {'<'}
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginHorizontal: 20}}>
          {!!data?.title && (
            <Text style={styles.titleContaner}>{data?.title}</Text>
          )}
          {data?.backdrop_path != null ? (
            <Image
              style={styles.imageContainer}
              source={{uri: imageBaseUrl + data?.backdrop_path}}
            />
          ) : (
            <View
              style={[
                styles.imageContainer,
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
          {data?.overview != '' && (
            <View style={styles.overViewContainer}>
              <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}>
                {data?.overview}
              </Text>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            {data?.genres.length > 0 && boxItem('Genre', data?.genres, false)}
            {data?.spoken_languages.length > 0 &&
              boxItem('Languages', data?.spoken_languages, false)}
            {data?.runtime != null &&
              data?.runtime.toString() &&
              boxItem('Duration', data?.runtime, true)}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WbView')}
            style={styles.bottomButton}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
