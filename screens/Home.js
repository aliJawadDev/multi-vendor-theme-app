import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
import MyIcon from '../components/MyIcon'
import { Button, Card } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ImageSlider
            autoPlayWithInterval={3000}
            images={[
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
              'http://placeimg.com/640/480/any',
            ]} />
        </View>
        <View style={{ flex: 1, flexDirection:'row' }}>
          <Card
          containerStyle={{height: 265}}
            image={require('../assets/images/robot-dev.png')}>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design</Text>
            <Button
              icon={<MyIcon name='code' color='#fff' size={20} />}
              buttonStyle={{ borderRadius: 0, margin: 0 }}
              title='VIEW NOW' />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});