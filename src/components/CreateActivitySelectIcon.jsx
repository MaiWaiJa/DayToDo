// import { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Input, View, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import Background from './Background';
import { useTheme, useData } from '../hooks';


// eslint-disable-next-line react/prop-types
const CreateActivitySelectIcon = ({ ModalVisiable, onShowSelectIcon }) => {
  const navigation = useNavigation()
  const { icons } = useTheme()
  const { iconActivity } = useData()

  return (
    <Background>
      <Modal animationType='slide' transparent={false} visible={ModalVisiable}>

        <View style={styles.title}>
          <Text style={{ fontFamily: 'Sarabun-Medium', fontSize: 25 }}>
            สร้าง<Text style={{ color: '#878AF5', fontSize: 25 }}>งาน</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              onShowSelectIcon(false)
              navigation.replace('HomeScreen')
            }}
          >
            <MaterialCommunityIcons name="close-circle" size={30} color="#aaa" />
          </TouchableOpacity>
        </View>

        <Text style={{
          padding: 15,
          marginLeft: 20,
          fontSize: 18,
          fontFamily: 'Sarabun-Medium',
          color: '#747474',
        }}>
          ทำอะไร?
        </Text>

        <View style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          width: '80%'
        }}>
          <View style={styles.BoxFocus}>
            <MaterialCommunityIcons name="cart" size={32} color="#878AF5" />
          </View>
          <View w={'80%'}>
            <Input
              variant="underlined"
              placeholder="ข้อความ"
              placeholderTextColor={'gray.500'}
              mt={2}
              color={'gray.800'}
              type={'text'}
              borderBottomWidth={3}
              fontSize={16}
              focusOutlineColor={'blue.500'}
              _focus={{ borderBottomWidth: 3 }}
            />
          </View>
        </View>

        <View
          w={'90%'}
          h={'40%'}
          mt={5}
          p={5}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            justifyContent: 'space-between'
          }}
          // bgColor={'amber.300'}
        >
          {iconActivity.map((item, index, array) => (
              item.id < array.length-2 && 
                <Button
                  key={index}
                  boxSize={70}
                  mr={item.id%3 != 0 ? 8 : 0}
                  mb={item.id < array.length-2 ? 8 : 0}
                  // mr={item.id%3 != 0 ? 8 : 0}
                  // mb={(item.id==array.length-3) == 0 ? 8 : 0}
                  bgColor={'#F1F1F1'}
                  borderRadius={10}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderColor={'#e1e1e1'}
                  borderWidth={1}
                  _pressed={{
                    bgColor: '#FbFbFb',
                    transform: [{ scale: 0.96 }]
                  }}
                  style={{ shadowColor: '#000', elevation: 20 }}
                >
                  <SvgXml fill={'#F1BC'} width="40" height="40" xml={item.icon} />
                </Button>
          ))}
          <SvgXml fill={'#F1BC'} stroke width="40" height="40" xml={icons.consoleController} />
        </View>



        <TouchableOpacity style={styles.CreatelastButton} onPress={() => {
          onShowSelectIcon(false)
          navigation.replace('CreateScreen', {
            createModalVisiable: true
          })
        }}>
          <Text style={{ alignSelf: 'center', marginTop: 8, color: '#ffffff', fontFamily: 'Sarabun-Regular', fontSize: 30 }}>สร้างงาน</Text>
        </TouchableOpacity>
      </Modal>
    </Background>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  BoxFocus: {
    marginRight: 20,
    padding: 12,
    backgroundColor: '#F1F1F1',
    shadowColor: '#000000',
    elevation: 3,
    borderRadius: 10
  },
  CreatelastButton: {
    width: '85%',
    height: 65,
    backgroundColor: "#666AF6",
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
});

export default CreateActivitySelectIcon;