import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from './RootStackParams';

const ValuesStyles = StyleSheet.create({
  background: {
    backgroundColor: '#041c2c',
    padding: 16,
    alignItems: 'center',
    flex: 1,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: '#00b5f1',
    padding: 10,
    borderRadius: 50,
  },
});

const values = [
  {key: '0'},
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '5'},
  {key: '8'},
  {key: '13'},
  {key: '21'},
];

export const ValuesList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={ValuesStyles.background}>
      <View style={{alignItems: 'center'}}>
        <Text style={ValuesStyles.title}>Select your estimation</Text>

        <FlatList
          data={values}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Result', {estimation: item.item.key});
              }}
              activeOpacity={0.5}
              style={ValuesStyles.button}
              key={item.item.key}>
              <Text style={ValuesStyles.btnText}>{item.item.key}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
