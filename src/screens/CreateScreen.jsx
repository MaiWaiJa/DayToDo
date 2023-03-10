/* eslint-disable react/prop-types */
import { useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, Pressable, Button} from 'react-native';
import { Input, View, ScrollView, ZStack, Box ,Platform} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScrollPicker from "react-native-wheel-scrollview-picker";

import { getTimeHours, getTimeMins, getIndex } from '../components/ScrollTimePicker';


// import { ScrollTimePicker } from '../components';

const CreateScreen = ({ route }) => {
  const navigation = useNavigation()
  const {createModalVisiable} = route.params
  const [modalVisible, setModalVisible] = useState(createModalVisiable);
  const [modalBeforePicTime,setmodalBeforePicTime] = useState(false);
  const [modalPicTime,setmodalPicTime] = useState(false);
  const [modalPicTime2,setmodalPicTime2] = useState(false);

  const [selectedTimeHours, setSelectedTimeHours] = useState('00')
  const [selectedTimeMinute, setSelectedTimeMinute] = useState('00') 

  return (
    <>
      <Modal animationType='fade' transparent={false} visible={modalVisible}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            height: 'auto',
          }}
        >
          
        <View style={styles.title}>
          <Text style ={{fontFamily:'Sarabun-Medium',fontSize: 25 }}>
            สร้าง<Text style ={{color:'#878AF5',fontSize: 25}}>งาน</Text>
          </Text>
          <TouchableOpacity 
            onPress={() => {
              setModalVisible(false)
              navigation.replace('HomeScreen')
            }} 
          >
              <MaterialCommunityIcons name="close-circle" size={30} color="#aaa"/>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          width: '80%',
          marginTop: 30,
        }}>
          <View style={styles.BoxFocus}>
            <MaterialCommunityIcons name="cart" size={32} color="#878AF5"/>
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
              _focus={{borderBottomWidth: 3}}
            />   
          </View>
        </View>
      
        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 24}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>เมื่อไหร่</Text>
          <TouchableOpacity onPress = {() => {setmodalBeforePicTime(true)}} >
            <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>มากกว่า</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text>Select Time</Text>
          <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{height: 200}}>
              <ScrollPicker
                dataSource={getTimeHours()}
                selectedIndex={getIndex(selectedTimeHours)}
                renderItem={(data, index, isSelected) => (
                  <Text style={isSelected && { color: 'red' }}>{data}</Text>
                )}
                onValueChange={(data, selectedIndex) => setSelectedTimeHours(data)}
                wrapperHeight={180}
                wrapperWidth={150}
                wrapperColor='#FFFFFF'
                itemHeight={60}
                highlightColor='#d8d8d8'
                highlightBorderWidth={2}
              />
            </View>
            <Text style={{position: 'absolute', paddingBottom: 20,fontSize: 20, fontWeight: 'bold'}}>:</Text>
            <View style={{height: 200, marginLeft: 30}}>
              <ScrollPicker
                dataSource={getTimeMins()}
                selectedIndex={getIndex(selectedTimeMinute)}
                renderItem={(data, index, isSelected) => (
                  <Text style={isSelected && { color: 'red' }}>{data}</Text>
                )}
                onValueChange={(data, selectedIndex) => setSelectedTimeMinute(data)}
                wrapperHeight={180}
                wrapperWidth={150}
                wrapperColor='#FFFFFF'
                itemHeight={60}
                highlightColor='#d8d8d8'
                highlightBorderWidth={2}
              />
            </View>
          </View>
        </View>

        <Button title="Show Time" onPress={() => console.log(`${selectedTimeHours}:${selectedTimeMinute}`)}/>
        

        <View w={'80%'} style={[styles.textStartAcitity, {marginTop: 35}]}>
          <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>นานเเค่ไหน?</Text>
          <TouchableOpacity onPress = {() => {setmodalPicTime2(true)}} >
            <Text style={{fontSize: 16,fontFamily:'Sarabun-Medium'}}>ระบุเอง...</Text>
          </TouchableOpacity>
        </View>
        
        <ZStack mt={4} alignItems="center" justifyContent="center" style={{height: 50}}>
          <Box
            w={'90%'}
            bgColor={'#878AF550'}
            rounded="lg" alignItems={'center'}
            justifyContent="center"
            style={{height: 50}}
          >
            <Box
              w={'95%'}
              bgColor={'#878AF570'}
              rounded="lg"
              alignItems={'center'}
              style={{height: 34}}
            >
              {/* เดะตรงนี้ทำให้ ข้ามไปตรงอื่นก่อน */}
              <Text style={{fontSize: 18, fontFamily: 'Sarabun-SemiBold', color: '#fff', letterSpacing: 16}}>1 2 3 4 5 6</Text>
            </Box>
          </Box>
        </ZStack>

        <Box w={'80%'} bgColor={'#F1F1F1'} alignSelf={'center'} style={styles.BoxNote}>
          <View flexDirection={'row'} bgColor={'#666AF6'} style={styles.NoteTitle}>
            <MaterialCommunityIcons name="plus-circle" size={24} color="#fff" />
            <Text style={{
              fontFamily:'Sarabun-Bold',
              fontSize: 18,
              color:'#fff',
              marginLeft: 15
            }}>
              เพิ่มงานย่อย
            </Text>
          </View>
          <Text style={{
            marginLeft: 15,
            marginTop: 10,
            fontFamily:'Sarabun-Regular',
            color: '#727272'
          }}>
            เพิ่มโน๊ต ลิ้งค์การประชุม หรือ เบอร์โทรศัพท์..
          </Text>
        </Box>
        <TouchableOpacity style={styles.CreatelastButton} onPress={() => {}}>
          <Text style={{ alignSelf: 'center', marginTop: 8, color: '#ffffff', fontFamily: 'Sarabun-Regular', fontSize: 30 }}>สร้างงาน</Text>
        </TouchableOpacity>
        </ScrollView>
      </Modal>

      <Modal animationType='fade' transparent={true} visible={modalBeforePicTime}>
        <Pressable onPress={() => {setmodalBeforePicTime(false)}} style={{alignItems: 'flex-end',flex: 1}}>
          <TouchableWithoutFeedback>
            <View style={{
              width: 130,
              height: 30,
              backgroundColor: '#878AF5',
              borderRadius: 15,
              marginTop: 180,
              marginRight: 25,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress = {() => {setmodalPicTime(true); setmodalBeforePicTime(false)}}>
                <Text style={{fontFamily:'Sarabun-Medium',fontSize: 13,color: '#ffffff'}}>ระบุเวลาเพิ่มกิจกรรม</Text>
              </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        </Pressable>
      
      </Modal>

      <Modal animationType='fade' transparent={true} visible={modalPicTime} >
          <Pressable style={{alignItems: 'center',justifyContent: 'center',flex:1,}} onPress = {() => {setmodalPicTime(false);}}>
            <TouchableWithoutFeedback>
              <View style ={{ 
                width: '75%',
                height: '25%',
                backgroundColor: '#878AF5',
                borderRadius:10
              }}>
                <Text style={{
                  margin: 10,
                  fontSize: 15,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff'
                }}>ระบุเวลาเริ่มกิจกรรม</Text>
                <Text style ={{
                  alignSelf: 'center',
                  fontSize: 13,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff85',
                  }}>ชั่วโมง : นาที</Text>
                <View style={{
                  width: '30%', 
                  height: '15%',
                  backgroundColor: '#F4863C',
                  borderRadius: 10,
                  alignSelf: 'flex-end',
                  marginTop: 70,
                  marginHorizontal: 10,
                  justifyContent: 'center'
                  }}>
                  {/* ใส่เวลา */}
                    <Text style={{
                      alignSelf: 'center',
                      fontFamily:'Sarabun-Medium',
                      color: '#808080'
                    }}>เสร็จสิ้น</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Pressable>
      </Modal>
      
      <Modal animationType='fade' transparent={true} visible={modalPicTime2} >
          <Pressable style={{alignItems: 'center',justifyContent: 'center',flex:1,}} onPress = {() => {setmodalPicTime2(false);}}>
            <TouchableWithoutFeedback>
              <View style ={{ 
                width: '75%',
                height: '25%',
                backgroundColor: '#878AF5',
                borderRadius:10
              }}>
                <Text style={{
                  margin: 10,
                  fontSize: 15,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff'
                }}>ระบุเวลาทำกิจกรรม</Text>
                <Text style ={{
                  alignSelf: 'center',
                  fontSize: 13,
                  fontFamily:'Sarabun-Medium',
                  color: '#ffffff85',
                  }}>ชั่วโมง : นาที</Text>
                <View style={{
                  width: '30%', 
                  height: '15%',
                  backgroundColor: '#F4863C',
                  borderRadius: 10,
                  alignSelf: 'flex-end',
                  marginTop: 70,
                  marginHorizontal: 10,
                  justifyContent: 'center'
                  }}>
                  {/* ใส่เวลา */}
                    <Text style={{
                      alignSelf: 'center',
                      fontFamily:'Sarabun-Medium',
                      color: '#808080'
                    }}>เสร็จสิ้น</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Pressable>
      </Modal>
    </>
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
  textStartAcitity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  BoxNote: {
    height: 200,
    marginVertical: 45,
    borderRadius: 15
  },
  NoteTitle: {
    height: 40,
    paddingLeft: 15,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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

export default CreateScreen;