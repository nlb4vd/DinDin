import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <View style={styles.title}>
              <Image style={{margin:10}} source={require('../assets/sidemenu.png')} />
              <Text style={styles.dindin}>DinDin</Text>
              <Image style={{margin:10}} source={require('../assets/search.png')} />
            </View>
            <View style={styles.months}>
              <Text style={styles.month}>February</Text>
              <Text style={styles.month}>March</Text>
              <Text style={styles.currMonth}>April</Text>
              <Text style={styles.month}>May</Text>
              <Text style={styles.month}>June</Text>
            </View>
          </View>

        <View style = {styles.invitation}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteCard')}>
            <View style = {styles.card} >
                <Image style={{margin:20}} source={require('../assets/face4.png')} />
                <View style = {styles.details}>
                  <Text>Alma Evans</Text>
                  <Text>Friday 20 September - 8:00pm</Text>
                </View>
              </View>
          </TouchableOpacity>

          <View style = {styles.decacc}>
              <View style = {styles.mybox}>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Image style={{justifyContent: "center",alignItems: "center",}}  source={require('../assets/no.png')} />
                  <Text style={styles.decline}>Decline</Text>
                </View>
              </View>
              <View style = {styles.mybox}>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Image  source={require('../assets/yes.png')} />
                  <Text style={styles.accept}>Accept</Text>
                </View>
              </View>
          </View>
        </View>

        <ScrollView>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Thursday 18 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Friday 19 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Saturday 20 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Sunday 21 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Monday 22 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Tuesday 23 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Wednesday 24 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Thursday 25 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Friday 26 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Saturday 27 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Sunday 28 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Monday 29 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
          <View style = {styles.event}>
            <Text style= {styles.Edate}>Tuesday 30 April</Text>
            <View style ={ {justifyContent: "space-around",alignItems: "center",}}>
              <Image  source={require('../assets/addEvent.png')} />
            </View>
          </View>
        </ScrollView>
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
  },
  header: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('15%'),
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
  month:{
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('5%'),
    color: "#D8D8D8",
    fontSize: 14,
    fontFamily: "Helvetica",
    textAlign:"center"
  },
  months:{
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('5%'),
    flexDirection:"row",
    justifyContent: "space-between",
  },
  currMonth:{
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('5%'),
    fontSize: 14,
    fontFamily: "Helvetica",
    textAlign:"center"
  },
  invitation: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('20%'),
    backgroundColor: 'steelblue',
    borderRadius: 4
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
  card: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('14%'),
      flexDirection:"row",
  },
  details:{
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center"
  },
  event:{
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('20%'),
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center"
  },
  Edate:{
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('5%'),
    fontSize: 14,
    color: "black",
    fontFamily: "Helvetica",
    textAlign:"left",
    borderWidth: 1,
    borderColor: '#F0F0F0',
    textAlignVertical: "center"
  },

});
