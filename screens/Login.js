import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';
import MyIcon from '../components/MyIcon'

export default class Login extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image style={{width: 200, height: 200, alignSelf: "center"}} source={require('../assets/images/robot-dev.png')}/>
                </View>
                <View style={{ flex: 2 }}>
                <ScrollView>
                    <Input
                        inputContainerStyle={styles.inputField}
                        placeholder='Enter Username/Email'
                        leftIcon={
                            <View style={styles.inputIcon}>
                            <MyIcon name="envelope" size={30} color="#000" />
                            </View>
                        }
                    />
                    <Input
                        inputContainerStyle={styles.inputField}
                        placeholder='Enter Password'
                        leftIcon={
                            <View style={styles.inputIcon}>
                            <MyIcon name="lock" size={30} color="#000" />
                            </View>
                        }
                    />
                    </ScrollView>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 2 }}>
                            <Button
                                buttonStyle={styles.buttonLogin}
                                icon={
                                    <View style={styles.inputIcon}>
                                    <MyIcon name="home" size={30} color="#000" />
                                    </View>
                                }
                                title="Login"
                            />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff8519',
        paddingTop: 20,
        paddingHorizontal: 30
    },
    inputIcon: {
        paddingRight: 10
    },
    inputField: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 30,
        margin: 10,
        backgroundColor: "transparent",
    },
    buttonLogin: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25,
        marginTop: 10,
        backgroundColor: "transparent",
    }
});