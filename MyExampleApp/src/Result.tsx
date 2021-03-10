import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './RootStackParams';

const Styles = StyleSheet.create({
  background: {
    backgroundColor: '#041c2c',
    padding: 16,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countContainer: {
    color: 'white',
    textAlign: 'center',
    fontSize: 250,
  },
  button: {
    width: 150,
    backgroundColor: '#00b5f1',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export const Result: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList, 'Values'>>();

  return (
    <SafeAreaView style={Styles.background}>
      <View style={{flex: 1}}>
        <Text style={Styles.title}>Your Choice</Text>
        <Text style={Styles.countContainer}>{params.estimation}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={Styles.button}>
          <Text style={Styles.btnText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.5}
          style={Styles.button}>
          <Text style={Styles.btnText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
