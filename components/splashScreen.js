import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {fadeIn1: new Animated.Value(1),
                  fadeIn2: new Animated.Value(1),
                  fadeIn3: new Animated.Value(1),
                 };
 }

 fadeIn1() {
  this.state.fadeIn1.setValue(1)
  Animated.timing(
    this.state.fadeIn1,
    {
      toValue: 0,
      duration: 1000,
    }
  ).start(() => this.fadeOut1());
}

  fadeOut1() {
    this.state.fadeIn1.setValue(0)
    Animated.timing(
      this.state.fadeIn1,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  fadeIn2() {
    this.state.fadeIn2.setValue(1)
    Animated.timing(
      this.state.fadeIn2,
      {
        toValue: 0,
        duration: 900,
      }
    ).start(() => this.fadeOut2());
  }

  fadeOut2() {
    this.state.fadeIn2.setValue(0)
    Animated.timing(
      this.state.fadeIn2,
      {
        toValue: 1,
        duration: 900,
      }
    ).start();
  }

  fadeIn3() {
    this.state.fadeIn3.setValue(1)
    Animated.timing(
      this.state.fadeIn3,
      {
        toValue: 0,
        duration: 800,
      }
    ).start(() => this.fadeOut3());
  }

  fadeOut3() {
    this.state.fadeIn3.setValue(0)
    Animated.timing(
      this.state.fadeIn3,
      {
        toValue: 1,
        duration: 800,
      }
    ).start();
  }

  tick() {
    setInterval(()=> {this.fadeIn1()}, 2000)
    setInterval(()=> {this.fadeIn2()}, 3000)
    setInterval(()=> {this.fadeIn3()}, 4000)
  }

  componentDidMount() {
    this.tick();
  }

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/home.png')} >
      </Image>
      <Animated.View style={{position:'absolute',top:heightPercentageToDP('26%'), left:widthPercentageToDP('13%'),opacity: this.state.fadeIn1}}>
        <Image style={styles.face1} source={require('../assets/face1.png')} />
        </Animated.View>
      <Animated.View style={{position:'absolute',top:heightPercentageToDP('15%'), left:widthPercentageToDP('63%'),opacity: this.state.fadeIn2}}>
        <Image style={styles.face1} source={require('../assets/face2.png')} />
        </Animated.View>
      <Animated.View style={{position:'absolute',top:heightPercentageToDP('35%'), left:widthPercentageToDP('60%'),opacity: this.state.fadeIn3}}>
        <Image style={styles.face1} source={require('../assets/face3.png')} />
        </Animated.View>


        <Text style={styles.title}>DinDin</Text>
        <Text>Connecting food lovers</Text>
        <TouchableOpacity style = {styles.start} onPress={() => this.props.navigation.navigate('HomePage')}>
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
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
 illustration: {
    position: "absolute",
    top: heightPercentageToDP('12%'),
  },
  title: {
    paddingTop: heightPercentageToDP("40%"),
    fontSize: 29,
    fontFamily: "Helvetica",
    color: "black",
    textAlign: "center",
  },
   start: {
    width: widthPercentageToDP('100%'),
    height:heightPercentageToDP("7%"),
    backgroundColor: "#0F8CFF",
    position: "absolute",
    bottom:0
  },
  getStarted: {
    color:"white",
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },

});
