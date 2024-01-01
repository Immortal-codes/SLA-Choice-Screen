import { TouchableOpacity, StyleSheet, Text,  View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Choice = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'grey'
        }}>
            <View style={{
                backgroundColor: 'black',
                height: 200, width: 200,
                borderRadius: 100,
                marginLeft:'25%'
            }}>
                <TouchableOpacity style={{
                    alignContent: 'center',
                    margin: 45,
                    marginTop: 80
                }}
                
                onPress={() => navigation.navigate('MainStudent')}
                
                ><Text style={{ color: 'white', fontSize: 30 }}>Student</Text></TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: 'black',
                height: 200, width: 200,
                borderRadius: 100,
                marginLeft:'25%',
                margin:20
            }}>
                <TouchableOpacity style={{
                    alignContent: 'center',
                    margin: 45,
                    marginTop: 80,
                }}
                
                onPress={() => navigation.navigate('Teacher')}
                
                
                ><Text style={{ color: 'white', fontSize: 30 }}>Teacher</Text></TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default Choice

const styles = StyleSheet.create({})