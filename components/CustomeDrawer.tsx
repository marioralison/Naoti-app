
import { DrawerContentScrollView , DrawerItem , DrawerItemList} from '@react-navigation/drawer';
import { useRouter } from 'expo-router'
import { View, Text , Image} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const CustomeDrawer = (props : any) => {
    const route = useRouter();
    const {top,bottom} = useSafeAreaInsets();

  return (
    <View style = {{flex : 1}}>
      <DrawerContentScrollView {...props}
      scrollEnabled={false}
      contentContainerStyle={{backgroundColor : "#dde3fe" }}>

        {/* Image */}
      <View style={{ padding : 20 , backgroundColor : "#242424"}}>
                    <Image 
                        source={require("@/assets/images/react-logo.png")}
                        style={{
                            width : 100,
                            height : 100,
                            alignSelf : "center",
                            
                    }}></Image>
                </View>
        <DrawerItemList {...props}/>
        {/* Logout */}
        <DrawerItem label={'logout'} onPress={() => route.replace('/')}/>
      </DrawerContentScrollView>

        {/* Footer */}
      <View style={{
                borderTopWidth : 1,
                borderTopColor : "#dde3fe",
                padding : 20,
                paddingBottom : 20 + bottom
                
        }}>
            <Text>Footer</Text>
        </View>
    </View>
  )
}

export default CustomeDrawer