import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>.+*Stellar App*+.</Text>

                <TouchableOpacity style={StyleSheet.routeCard} onPress={()=> 
                    this.props.navigation.navigate("TonightSky")}>

                        <Text style={StyleSheet.routeText}>Tonight Sky</Text>
                        <Image source ={require("../assets/night-sky.p")} style={{ width:80, height: 80}}></Image>
                        
                    </TouchableOpacity>
                
                

                <ImageBackground source={require('../assets/stars.gif')}></ImageBackground>
            </View>

        )
    }
}