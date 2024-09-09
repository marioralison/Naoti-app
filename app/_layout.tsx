import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CustomHeader } from '@/components/custoemHeade';
import CustomeDrawer from '@/components/CustomeDrawer';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomeDrawer}>
      <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            header : () => <CustomHeader/>,
            drawerIcon : ({ size , color}) => (
              <Ionicons name='home-outline' size={size} color={color}></Ionicons>
            )
          }}
          
        />
        <Drawer.Screen
          name="home/addNote" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Ajouter Note',
            header : () => <CustomHeader/>,
            drawerIcon : ({ size , color}) => (
              <Ionicons name='home-outline' size={size} color={color}></Ionicons>
            )
          }}
        />
        <Drawer.Screen
          name="home/astuce" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'astuce',
            header : () => <CustomHeader/>,
            drawerIcon : ({ size , color}) => (
              <Ionicons name='home-outline' size={size} color={color}></Ionicons>
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
