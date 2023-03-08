/* eslint-disable no-undef */
import {useState} from 'react'
import {
  Text,
  Image,
  Box,
  View,
  Button,
  VStack,
} from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';

import {
  Background,
  Calendar,
  ListActivity,
  ModernCalendarStrip,
} from '../components'
import { useData, useTheme } from '../hooks'
import { useNavigation } from '@react-navigation/native';

import CreateAcitivitySelectIcon from '../components/CreateActivitySelectIcon';

const HomeScreen = () => {
  const {assets} = useTheme()
  const {newDate, expenses} = useData()
  const navigation = useNavigation()
  // console.log(expenses)
  // console.log("count")
  const [showCalendar, setShowCalendar] = useState(false)
  const [showSelectIcon, setShowSelectIcon] = useState(false)

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
        mt={5}
        bgColor={'#fff'}
        w={'100%'}
        h={'69%'}
        pt={7}
        px={5}
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
      </Box>

      {/*  Bottom Tabs */}
      <Box
        elevation={30}
        backgroundColor={'#fff'}
        // bottom={-437}
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
            source={assets.tabIconHomeSelect}
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
          <View>
            <AntDesign name="plus" size={50} color="white" />
          </View>
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
          paddingLeft={3}
          bottom={0}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Image
            resizeMode={"contain"}
            alt={"Home Icon"}
            source={assets.tabIconSettingSelect}
            boxSize={35}
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
      {showSelectIcon && <CreateAcitivitySelectIcon showSelectIcon={showSelectIcon} onShowSelectIcon={onShowCreateAcititySelectIcon} />}
    </Background>
  )
}

export default HomeScreen