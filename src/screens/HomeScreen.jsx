/* eslint-disable no-undef */
import {useState} from 'react'
import { Modal } from 'react-native';
import {
  Text,
  Image,
  Box,
  View,
  Button,
  VStack,
  Pressable,
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {
  Background,
  Calendar,
  ListActivity,
  ModernCalendarStrip,
  CreateActivitySelectIcon
} from '../components'
import { useData, useTheme } from '../hooks'
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import ModalEdit from '../components/ModalEdit';

const HomeScreen = () => {
  const {icons} = useTheme()
  const {newDate, expenses} = useData()
  const navigation = useNavigation()
  // console.log(expenses)
  // console.log("count")
  const [showCalendar, setShowCalendar] = useState(false)
  const [showSelectIcon, setShowSelectIcon] = useState(false)
  const [modalEdit, setModalEdit] = useState(false);

  function onShowCalenderChange() {
    setShowCalendar(false)
  }
  function onShowCreateAcititySelectIcon() {
    setShowSelectIcon(false)
  }

  return (
    <Background>
      <View
        mt={2}
        w={'90%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text
          fontSize={30}
          lineHeight={47}
          fontFamily={'Sarabun-Bold'}
        >
          {newDate.monthText}
        </Text>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons 
            name="calendar-multiselect"
            size={36}
            color="#666AF6"
            onPress={() => setShowCalendar(true)}
            style={{marginRight: 4}}
          />
          <MaterialCommunityIcons
            name="inbox"
            size={36}
            color="#666AF6" 
            onPress={() => navigation.navigate('CreateAcitivityTest', {
              ModalVisiable: true
            })}
          />
          <MaterialCommunityIcons
            name="clock"
            size={36}
            color="#666AF6" 
            onPress={() => navigation.navigate('ScrollTimePicker')}
          />
        </View>
      </View>

      {/* <DateListEvent /> */}
      <ModernCalendarStrip />
      
      {/* List Activity */}
      <Box 
        mt={3}
        w={'100%'}
        pt={7}
        px={5}
        flex={1}
        bgColor={'#fff'}
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        shadow={9}
      >
        <VStack>
          {expenses.map((item, index, array) => (
            <View key={item.id}>
              <ListActivity name={item.name} timestart={item.timestart}  />
              {index+1 != array.length && <View style={{ height: 80, backgroundColor: '#dbdbdb',width:2, marginLeft: 75}}/>}
            </View>
          ))}
        </VStack>
          
        <Button onPress = {() => {setModalEdit(true)}}> 
          <View style={{alignSelf: 'center',marginRight: 100,flexDirection: 'row'}}>
            <MaterialIcons name="edit" size={24} color="#ff7b00"/>
            <Text>edit</Text>
          </View>
        </Button>  
      </Box>
      
      {/*  Bottom Tabs */}
      <Box
        elevation={30}
        backgroundColor={'#fff'}
        padding={3}
        width={'100%'}
        borderTopWidth={1}
        borderTopColor={'#EDEDED'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        height={90}
        zIndex={2}
      >
        <Button 
          style={{
            backgroundColor: '#878AF5',
            marginLeft: 40,
            padding: 0,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#EDEDED',
            paddingHorizontal: 10,
          }}
          boxSize={65}
          shadow={5}
          pt={4}
          bottom={0}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={icons.tabIconHomeSelect}
            boxSize={44}
            alignSelf={'center'}
          />
          <Text
            style={{ fontSize: 12}}
            fontFamily={'Sarabun-SemiBold'}
            color={"white"}
            bottom={2}
            textAlign={'center'}
          >
            Home
          </Text>
        </Button>
        <Button
          onPress={() => setShowSelectIcon(true)}
          style={{bottom: 55}}
          backgroundColor={'#666AF6'}
          alignSelf={'center'}
          position={'absolute'}
          left={'43%'}
          zIndex={3}
          alignItems={'center'}
          justifyContent={'center'}
          width={70}
          height={70}
          borderRadius={40}
        >
          <SvgXml stroke={'#fff'} width="40" height="40" xml={icons.plus} />
        </Button>
        <Button
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#878AF5',
            marginRight: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#EDEDED',
            paddingHorizontal: 10,
          }}
          boxSize={65}
          shadow={5}
          pt={4}
          px={0}
          bottom={0}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={icons.tabIconSettingSelect}
            boxSize={35}
            ml={1}
          />
          <Text
            style={{ fontSize: 12}}
            fontFamily={'Sarabun-SemiBold'}
            color={"white"}
            bottom={1}
          >
            Setting
          </Text>
        </Button>
      </Box>

      {/* Modal Calendar */}
      {showCalendar && <Calendar showCalendar={showCalendar}  onShowCalenderChange={onShowCalenderChange} />}
      {/* Modal Create Activity Select Icon */}
      {showSelectIcon && <CreateActivitySelectIcon showSelectIcon={showSelectIcon} onShowSelectIcon={onShowCreateAcititySelectIcon} />}

      {modalEdit && <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit}/>}

    </Background>
  )
}

export default HomeScreen