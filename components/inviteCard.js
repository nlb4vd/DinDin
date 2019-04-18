import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import MapView from 'react-native-maps';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export default class inviteCard extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style = {styles.header}>
            <View style={styles.title}>
              <Image style={{margin:10}} source={require('../assets/back.png')} onPress={() => this.props.navigation.navigate('homeScreen')}/>
              <Text style={styles.dindin}>DinDin</Text>
              <View style={{margin:10}}></View>
            </View>
          </View>

          <View style = {styles.invitation}>
            <View>
              <View style = {styles.card} >
                  <Image style={{width: widthPercentageToDP('22%'),height:heightPercentageToDP("10")}} source={require('../assets/face4.png')} />
                  <View style = {styles.details}>
                    <Text style = {{fontFamily: 'Helvetica-Bold', fontSize: 15}}>New Brunswick Cafe</Text>
                    <Text>Fri 20 September - 8:00pm</Text>
                    <Text></Text>
                    <Text style = {{color : 'grey'}}>Host by Alma Evans</Text>
                  </View>
                </View>
            </View>

            <View style = {styles.decacc}>
                <View style = {styles.mybox}>
                  <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                    <Image style={{justifyContent: "center",alignItems: "center",}}  source={require('../assets/no.png')} />
                    <Text style={styles.decline}>Decline</Text>
                  </View>
                </View>
                <View style = {styles.mybox}>
                  <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                    <Image  source={require('../assets/yes.png')} />
                    <Text style={styles.accept}>Accept</Text>
                  </View>
                </View>
            </View>
          </View>
          <View style = {{width: widthPercentageToDP('100%'), height: heightPercentageToDP('50%'),}}>
            <MapView
                style={{flex: 1}}
                region={{
                  latitude: 38.0316,
                  longitude: -78.5108,
                  latitudeDelta: .5,
                  longitudeDelta: .5
                }}
                showsUserLocation={true}>
                  <MapView.Marker
                      coordinate={{latitude: 38.0316,
                      longitude: -78.5108}}
                  />
                  <MapView.Marker
                      coordinate={{latitude:38.0037,
                      longitude: -78.2708,
                    }}
                    image={require("../assets/face4.png")}
                  />
                </MapView>
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F0FFFF"
    },
    header: {
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('10%'),
      backgroundColor: "#FFFFFF"
    },
    dindin:{
      letterSpacing: 0.4,
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Helvetica-Bold'
    },
    title:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('10%'),
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems:"center"
    },
    invitation: {
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('30%'),
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
    },
    card: {
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('24%'),
      flexDirection:"column",
      justifyContent: "space-around",
      alignItems: "center"
    },
    details:{
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center"
    },
    decacc: {
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('6%'),
      backgroundColor: 'green',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mybox:{
      width: widthPercentageToDP('40%'),
      height:heightPercentageToDP("6%"),
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: '#F0F0F0',
    },
    decline:{
      marginLeft: widthPercentageToDP("2%"),
      marginTop: heightPercentageToDP("1.5%"),
      fontSize: 25,
      fontFamily: "Helvetica",
      color: "red",
      textAlign: "center",
    },
    accept:{
      marginLeft: widthPercentageToDP("2%"),
      marginTop: heightPercentageToDP("1.5%"),
      fontSize: 25,
      fontFamily: "Helvetica",
      color: "green",
      textAlign: "center",
    },
});
