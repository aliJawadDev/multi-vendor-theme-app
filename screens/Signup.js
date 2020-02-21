import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';
import MyIcon from '../components/MyIcon'

export default class Signup extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <Image style={{flex:1, height: 150,  borderWidth:1, borderColor: "#000"}} source={require('../assets/images/robot-prod.png')}/>
                </View>
                <View style={ styles.box}>
                <ScrollView>
                <Input
                        inputContainerStyle={styles.inputField}
                        placeholder='Enter Username'
                        leftIcon={
                            <View style={styles.inputIcon}>
                            <MyIcon name="user" size={30} color="#000" />
                            </View>
                        }
                    />
                    <Input
                        inputContainerStyle={styles.inputField}
                        placeholder='Enter Email'
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
                     <Input
                        inputContainerStyle={styles.inputField}
                        placeholder='Enter Confirm Password'
                        leftIcon={
                            <View style={styles.inputIcon}>
                            <MyIcon name="lock" size={30} color="#000" />
                            </View>
                        }
                    />
                    </ScrollView>
                            <Button
                                buttonStyle={styles.buttonLogin}
                                icon={
                                    <View style={styles.inputIcon}>
                                    <MyIcon name="user-plus" size={30} color="#fff" />
                                    </View>
                                }
                                title="Sign Up"
                            />

                    <View style={{ flex: 1, flexDirection: "row" }}>

                    </View>
                </View>
                <View style={{flex: 2}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 30
    },
    inputIcon: {
        paddingRight: 10
    },
    inputField: {
        padding: 5,
        borderRadius: 5,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
        shadowRadius: 30,
        shadowOpacity: 10,
    },
    buttonLogin: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fc7c19',
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#fc7c19",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
        shadowRadius: 30,
        shadowOpacity: 10,
    },
    box: {
        flex: 4,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 30,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        shadowRadius: 30,
        shadowOpacity: 10,
        padding: 10,
    }
});