import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, SafeAreaView, StyleSheet, Text} from 'react-native';

const HomeStyles = StyleSheet.create({
  backGround: {
    backgroundColor: '#041c2c',
    height: '100%',
    padding: 16,
  },
  logo: {
    borderRadius: 200,
  },
  title: {
    color: 'white',
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
  },
});

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={HomeStyles.backGround}>
      <Image style={HomeStyles.logo} source={require('../assets/piggy.png')} />

      <Text style={HomeStyles.title}>Plain Poker</Text>

      <Text style={HomeStyles.subTitle}>
        An app to estimate your awesome projects
      </Text>

      <Button
        color={'#00b5f1'}
        onPress={() => {
          navigation.navigate('Values');
        }}
        title="Estimate"
      />
    </SafeAreaView>
  );
};
