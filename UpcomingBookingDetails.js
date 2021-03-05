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

class UpcommingBookingDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FlatListItemPrayer: [
        {
          key: '#7',

          addd: require('./sadhuimg.png'),
          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },

        {
          key: '#8',

          addd: require('./sadhuimg.png'),
          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },

        {
          key: '#9',

          addd: require('./sadhuimg.png'),
          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },

        {
          key: '#10',

          addd: require('./sadhuimg.png'),
          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },

        {
          key: '#11',

          addd: require('./sadhuimg.png'),

          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },

        {
          key: '#12',

          addd: require('./sadhuimg.png'),
          add33: 'Kanya Bhojan',
          online: 'Online',
          time: '18-Dec-2020, 11.00 AM',
          guest: '3 guests',
        },
      ],
    };
  }

  renderItemPrayer = ({item, index}) => {
    // alert(JSON.stringify(item))
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            height: 140,
            width: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <ImageBackground
            imageStyle={{borderRadius: 5}}
            style={{marginRight: 8, height: 140, marginLeft: 10, width: 340}}
            source={item.addd}></ImageBackground>
        </View>

        <Text
          style={{
            marginLeft: 18,
            marginTop: 16,
            color: '#505050',
            fontSize: 21,
            lineHeight: 24,
            fontStyle: 'normal',
          }}>
          {item.add33}
        </Text>
        <Text
          style={{
            marginLeft: 18,
            marginTop: 4,
            color: '#505050',
            fontSize: 16,
            lineHeight: 24,
            fontStyle: 'normal',
          }}>
          {item.online}
        </Text>

        <Text
          style={{
            marginLeft: 18,
            marginTop: 4,
            color: '#505050',
            fontSize: 16,
            lineHeight: 24,
            fontStyle: 'normal',
          }}>
          {item.time}
        </Text>
        <Text
          style={{
            marginLeft: 18,
            marginTop: 4,
            color: '#505050',
            fontSize: 16,
            lineHeight: 24,
            fontStyle: 'normal',
          }}>
          {item.guest}
        </Text>
      </View>
    );
  };

  _keyExtractor = (item, index) => item.key;

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
              Booked
            </Text>
            <Image style={{height: 30, width: 12, resizeMode: 'contain'}} />
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              marginTop: 24,
              width: '100%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FlatList
              style={{width: '100%'}}
              data={this.state.FlatListItemPrayer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderItemPrayer}
            />
          </View>

          <View
            style={{
              marginTop: 30,
              borderBottomWidth: 0.4,
              backgroundColor: '#949494',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}></View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AstrologerChat')}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 24,
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'normal',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  fontFamily: 'DM Sans',
                  color: '#505050',
                }}>
                Download Invoice
              </Text>
              <Image
                style={{height: 15, width: 12}}
                source={require('./fileimg.png')}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 30,
              borderBottomWidth: 0.4,
              backgroundColor: '#949494',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 24,
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 18,
                fontWeight: '400',
                fontFamily: 'DM Sans',
                color: '#505050',
              }}>
              Share Puja details
            </Text>
            <Image
              style={{height: 16, width: 15}}
              source={require('./share.png')}
            />
          </View>

          <View
            style={{
              marginTop: 30,
              borderBottomWidth: 0.4,
              backgroundColor: '#949494',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}></View>

          <Text
            style={{
              fontWeight: 'normal',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'DM Sans',
              color: '#505050',
              marginLeft: 16,
              marginTop: 16,
            }}>
            Reschedule Puja
          </Text>
          <View
            style={{
              backgroundColor: '#505050',
              borderWidth: 0.2,
              width: 103,
              marginTop: 2,
              marginLeft: 17,
            }}></View>

          <Text
            style={{
              fontWeight: 'normal',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'DM Sans',
              color: '#505050',
              marginLeft: 16,
              marginTop: 4,
            }}>
            You can reschedule this puja once.
          </Text>

          <Text
            style={{
              fontWeight: 'normal',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'DM Sans',
              color: '#FF4D4D',
              marginLeft: 16,
              marginTop: 16,
            }}>
            Cancel Puja
          </Text>
          <View
            style={{
              backgroundColor: '#FF4D4D',
              borderWidth: 0.2,
              width: 74,
              marginTop: 2,
              marginLeft: 17,
            }}></View>

          <Text
            style={{
              fontWeight: 'normal',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'DM Sans',
              color: '#949494',
              marginLeft: 16,
              marginTop: 4,
            }}>
            You can cancel this puja for 50% refund until Jan 3 at 11:00 am.
          </Text>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

export default UpcommingBookingDetails;
