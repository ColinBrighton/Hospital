import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {ButtonComp} from '../Components/Button';
import {SymptomsList} from './UserData';
import {confirmAppointment} from '../Store/Action';
import {IconComp} from '../Components/Icon';
import {selectedSymptoms} from '../Store/Action';

const {width, height} = Dimensions.get('screen');

export const SelectSymptoms = props => {
  // const [disabledButton, setDisabledButton] = useState(true);
  const [selectedValue, setSelectedValue] = useState([]);
  const [symptoms, setSymptoms] = useState(SymptomsList);
  const [searchSymptoms, setSearchSymptoms] = useState('');

  console.log(selectedValue, '-----------');

  const onChangeSearch = query => {
    setSearchSymptoms(query);
    const serchdata = query.toLowerCase();
    setSymptoms(
      SymptomsList.filter(
        sympt =>
          sympt.title.toString().toLowerCase().includes(serchdata) ||
          sympt.issues.some(issue =>
            issue.symp.toString().toLowerCase().includes(serchdata),
          ),
      ),
    );
  };

  const HandleButton = () => {
    console.log(selectedValue, 'handle button value');
    if (selectedValue.length === 0) {
      Alert.alert('Alert!', 'Please select any symptoms', [{text: 'OK'}]);
    } else {
      dispatch(selectedSymptoms(selectedValue));
      props.navigation.navigate('ChooseDoctor');
    }
  };

  const handleSymptomSelection = symptom => {
    if (!selectedValue.includes(symptom) && selectedValue.length <= 0) {
      setSelectedValue([...selectedValue, symptom]);
    } else {
      ToastAndroid.show(
        'Maximum 1 symptom can be selected',
        ToastAndroid.SHORT,
      );
    }
  };

  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require('../Images/signup.jpg')}
      style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headwrap}>
          <Text style={styles.head}>What is your concern?</Text>
          <View style={styles.btn}>
            <ButtonComp
              text={'Choose Doctor'}
              mode={'elevated'}
              bgColor={'#150485'}
              textColor={'white'}
              onPress={HandleButton}
            />
          </View>
        </View>
        <View>
          <Searchbar
            placeholder="Search for symptoms."
            value={searchSymptoms}
            onChangeText={onChangeSearch}
          />
          {/* <Text>Selected Symptoms: {selectedValue} </Text> */}
          <View style={styles.selected}>
            <Text style={styles.selectedtext}>Selected Symptoms: </Text>
            <View>
              {selectedValue.map((value, index) => (
                <View style={styles.selectedvalue} key={index}>
                  <View style={styles.textwrap}>
                    <Text style={styles.selectedtext}>{value}</Text>
                  </View>
                  <View style={styles.removeicon}>
                    <IconComp
                      name={'trash-o'}
                      size={30}
                      color={'#150485'}
                      onPress={() => {
                        setSelectedValue(
                          selectedValue.filter(val => val !== value),
                        );
                      }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View>
          {symptoms.map((value, index) => (
            <View key={index}>
              <Text style={styles.title}>{value.title}</Text>
              {value.issues.map((val, index) => (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.symptoms}
                    activeOpacity={0.6}
                    onPress={() => handleSymptomSelection(val.symp)}>
                    <Text style={styles.symptomstext}>{val.symp}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
          <View style={{height: 30}}></View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
    // backgroundColor: 'red',
    width: width,
    height: height,
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#150E56',
    // backgroundColor:'red'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: '#7286D3',
    borderRadius: 50,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  symptoms: {
    backgroundColor: '#DAF5FF',
    margin: 2,
    borderRadius: 50,
  },
  symptomstext: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 20,
    paddingVertical: 8,
  },
  btn: {
    alignItems: 'center',
    paddingHorizontal: 8,
    width:width*0.5,
    // backgroundColor:'green',
    right:20
  },
  headwrap: {
    flexDirection: 'row',
    // backgroundColor:"red",
    alignItems: 'center',
    marginBottom: 10,
  },
  selected: {
    paddingTop: 10,
  },
  selectedtext: {
    color: 'black',
    fontSize: 15,
  },
  selectedvalue: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#150485',
    backgroundColor: '#DAF5FF',
    marginVertical: 1,
    paddingLeft: 20,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
  },
  removeicon: {
    flex: 0.1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  textwrap: {
    flex: 0.8,
  },
});
