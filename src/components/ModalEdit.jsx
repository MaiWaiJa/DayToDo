import { View, Text, Pressable ,Modal } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function ModalEdit({setModalEdit,modalEdit}) {
    return (
        <Modal animationType='fade' transparent={true} visible={modalEdit} statusBarTranslucent={true} >
            <View style ={{justifyContent: 'center',alignItems: 'center',flex:1,backgroundColor: '#0000004b'}}>
                <View style={{backgroundColor:'#D5D5E2',width: '85%',height: '33%',borderRadius: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 40,height:40,borderRadius:35,backgroundColor:'#F4863C',margin: 10,justifyContent: "center",alignItems: 'center',}}>
                            <FontAwesome5 name="shopping-cart" size={22} color="#ffffff"  />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style ={{marginLeft : 10,marginTop: 12,fontSize: 12,fontFamily:'Sarabun-Regular',color: '#6C6A6A'}}>วันที่เวลา รออีเอิทมาใส่</Text>
                            <Text style={{marginBottom: 10,marginLeft : 10,fontSize: 13,fontFamily:'Sarabun-Bold'}}>ช้อปปิ้ง</Text>
                        </View>
                        <View style={{width: 150, alignItems: 'flex-end', paddingTop: 15,paddingRight: 10}}>
                            <Pressable onPress={() => setModalEdit(false)}>
                                <AntDesign name="closecircle" size={30} color="#494949" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{height: 2,width: '95%',backgroundColor: '#9b9a9a',alignSelf: 'center'}}/>
                    <View style={{flexDirection: 'row',marginTop: 5,marginLeft: 5}}>
                        <View style={{width:8,height:8,borderRadius:20,backgroundColor:'#000000',margin: 10}}/>
                        <Text style={{fontFamily:'Sarabun-Regular'}}>Buy Something</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginLeft: 5}}>
                        <View style={{width:8,height:8,borderRadius:20,backgroundColor:'#000000',margin: 10}}/>
                        <Text style={{fontFamily:'Sarabun-Regular'}}>Buy Something</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 30}}>
                        <View style={{width:60,height:50,backgroundColor: '#C7C7D1',borderRadius: 10,alignItems: 'center',justifyContent: 'center',shadowColor: '#000000',elevation: 10}}>
                            <Ionicons name="md-trash-bin" size={25} color="#b86128" />
                            <Text style={{fontFamily:'Sarabun-Regular',fontSize: 12}}>ลบ</Text>
                        </View>
                        <View style={{width:60,height:50,backgroundColor: '#C7C7D1',borderRadius: 10,alignItems: 'center',justifyContent: 'center',shadowColor: '#000000',elevation: 10}}>
                            <FontAwesome name="copy" size={25} color="#b86128" />
                            <Text style={{fontFamily:'Sarabun-Regular',fontSize: 12}}>ทำซ้ำ</Text>
                        </View>
                        <View style={{width:60,height:50,backgroundColor: '#C7C7D1',borderRadius: 10,alignItems: 'center',justifyContent: 'center',shadowColor: '#000000',elevation: 10}}>
                            <AntDesign name="checkcircle" size={25} color="#b86128" />
                            <Text style={{fontFamily:'Sarabun-Regular',fontSize: 12}}>เสร็จสิ้น</Text>
                        </View>
                    </View>
                    <View style={{width:'75%' ,height: '20%',backgroundColor: '#C7C7D1',borderRadius: 10,alignSelf: 'center',marginTop: 15,justifyContent: 'center',flexDirection: 'row',shadowColor: '#000000',elevation: 10,}}>
                        <Feather name="edit" size={24} color="black" style={{alignSelf: 'center'}}/>
                        <Text style={{fontFamily:'Sarabun-Regular',fontSize:18,alignSelf: 'center'}}> เเก้ไขลิสต์</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalEdit;