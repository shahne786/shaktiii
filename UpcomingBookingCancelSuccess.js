import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions,
  AsyncStorage,
  PermissionsAndroid,
  NativeModules,
  BackHandler,
} from 'react-native';

import React, {Component} from 'react';
//import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RescheduleChooseDate from './RescheduleChooseDate';

class UpcomingBookingCancelSuccess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: true,
    };
  }

  render() {
    return (
      <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <StatusBar backgroundColor="orange" />

        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            height: 60,
            elevation: 2,
            backgroundColor: '#FF9445',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginTop: 15,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{height: 16, width: 16, resizeMode: 'contain'}}
                source={require('./closebtn.png')}
              />
            </TouchableOpacity>

            <Text
              style={{
                lineHeight: 30,
                fontSize: 20,
                fontFamily: 'DM Sans',
                color: 'white',
              }}>
              Puja Cancellation
            </Text>
            <Image style={{height: 30, width: 12, resizeMode: 'contain'}} />
          </View>
        </View>

        <Text
          style={{
            textAlign: 'justify',
            fontWeight: '700',
            fontSize: 20,
            lineHeight: 23,
            fontWeight: 'normal',
            fontFamily: 'DM Sans',
            color: '#505050',
            marginLeft: 17,
            marginTop: 35,
            marginRight: 17,
          }}>
          Are you sure you want to cancel your puja?
        </Text>

        <Text
          style={{
            textAlign: 'justify',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 18,
            fontWeight: 'normal',
            fontFamily: 'DM Sans',
            color: '#505050',
            marginLeft: 17,
            marginTop: 16,
            marginRight: 17,
          }}>
          Are you sure you want to cancel your puja?
        </Text>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('UpcomingCanceledSuccess')
          }>
          <View
            style={{
              height: 42,
              width: '90%',
              borderRadius: 8,
              borderColor: '#FF9445',
              marginTop: 30,
              borderWidth: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 12,
                lineHeight: 16,
                fontFamily: 'DM Sans',
                color: '#FF9445',
              }}>
              RESCHEDULE INSTEAD
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 70,
            width: '100%',
            backgroundColor: '#FFF',
            elevation: 5,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'column', marginTop: 12}}>
              <TouchableOpacity
              //  onPress={() => this.props.navigation.navigate('ChooseDate')}
              >
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 18,
                    fontWeight: 'normal',
                    fontFamily: 'DM Sans',
                  }}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
            //   onPress={() =>
            //     this.props.navigation.navigate(
            //       'UpcomingBookingRescheduleSuccess',
            //     )
            //   }
            >
              <View
                style={{
                  borderColor: '#FF4D4D',
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 42,
                  width: 122,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 14,
                    lineHeight: 18,
                    fontWeight: 'normal',
                    fontFamily: 'DM Sans',
                    color: '#FF4D4D',
                  }}>
                  YES, CANCEL
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

export default UpcomingBookingCancelSuccess;
