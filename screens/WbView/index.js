import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const WbView = ({route, navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 40, color: 'green', marginLeft: 20}}>
          {'<'}
        </Text>
      </TouchableOpacity>
      <WebView source={{uri: 'https://www.cathaycineplexes.com.sg/'}} />
    </SafeAreaView>
  );
};

export default WbView;
