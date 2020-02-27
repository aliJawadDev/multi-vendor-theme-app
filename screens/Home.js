import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
import MyIcon from '../components/MyIcon'
import { Button, Card } from 'react-native-elements';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 1000,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-2',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 100,
  },
  {
    id: '58694a0f-3da1-471f-bd96-3',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 500,
  },
  {
    id: '58694a0f-3da1-d-bd96-145571e29d72',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 500,
  },
  {
    id: '58694a0f-3da1-4-bd96-145571e29d72',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 500,
  },
  {
    id: '58694a0f-3da1-471f-6-145571e29d72',
    title: 'Samsung LED',
    imageSrc: require('../assets/images/tv-img.jpg'),
    price: 500,
  },
];

function Item({ title, imageSrc, price }) {
  return (
    <View style={{ width: 50 + "%", margin: 'auto' }}>
      <Card
        imageStyle={{ width: 100 + "%" }}
        image={imageSrc}>
        <Text style={styles.cardItmName}>{title}</Text>
        <Text style={styles.cartItmPrice}>{price}</Text>
        <Button
          title='Add to '
          iconRight={true}
          icon={<MyIcon name='shopping-cart' color='#fff' size={20} />}
          />
      </Card>
    </View>
  );
}

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4 }}>
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
        <View style={{ flex: 1 }}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item }) => <Item title={item.title} imageSrc={item.imageSrc} price={item.price} />}
          />
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
  cardItmName: {
    marginBottom: 10,
    fontWeight: 'bold'
  },
  cardItmPrice: {
    margin: 10,
  }
});