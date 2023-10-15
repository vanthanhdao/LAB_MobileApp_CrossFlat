
import { Button, Image, Switch, View, Text, ScrollView, SafeAreaView, TouchableHighlight, ImageBackground } from 'react-native'
import Cat from './components/Cat'
import styles from './AppStyle'
import Login from './components/Login'
import ListView from './components/ListView'
import Animations from './components/Animations'
import Child from './components/Child'
import { useState } from 'react'
import { Banner, PaperProvider, Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ContactScreen, FavoriteScreen, AccountScreen, ProfileScreen } from './screens/indexScreens'
import CustomNavigationBar from './components/CustomNavigationBar'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './components/CustomDrawerContent';
import CustomMenu from './components/CustomMenu'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from './utility/color'
import OptionScreen from './screens/OptionScreen'
import { MaterialIcons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const ContactsScreens = () => {
  return (

    <Stack.Navigator initialRouteName='Contacts' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Contacts' component={ContactScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: color.blue,
            }
          }
        }}
      />
    </Stack.Navigator>

  )
}

const FavoritessScreens = () => {
  return (

    <Stack.Navigator initialRouteName='Favorites' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Favorites' component={FavoriteScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>

  )
}

const AccountScreens = ({ navigation }) => {
  return (

    <Stack.Navigator initialRouteName='Account' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Account' component={AccountScreen}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: color.blue,
          },
          headerRight: () => (
            <MaterialIcons name="settings" size={24} style={{ color: 'white', marginRight: 10 }}
              onPress={() => navigation.navigate('Options')}
            />
          )
        }} />
      <Stack.Screen name='Options' component={OptionScreen} options={{ title: 'Options' }} />
    </Stack.Navigator>

  )
}

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  // Demo props 
  // const data = 'Thanh'
  // const handleDemo = (data) => {
  //   console.log(data)
  // }

  //Demo Switch
  // const [isEnable, setisEnable] = useState(false)


  //Demo Banner Paper
  // const [visiable, setVisiable] = useState(true)
  const [isNavBarVisible, setNavBarVisible] = useState(false);
  const [titleAppbar, setTitleAppbar] = useState("Contacts")

  return (

    //Demo Stack Navigation, App Bar
    <PaperProvider>

      <NavigationContainer>

        {/* 
        <Tab.Navigator
          initialRouteName="ContactScreen"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: '#9A86CF' }}
        >
          <Tab.Screen

            name="ContactScreen"
            listeners={{
              tabPress: (e) => {
                setTitleAppbar("Contacts");
              },
            }}
            component={ContactsScreens}
            options={{

              tabBarLabel: 'Contacts',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="phone" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            listeners={{
              tabPress: (e) => {
                setTitleAppbar("Favorites");
              },
            }}
            name="FavoriteScreen"
            component={FavoritessScreens}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            listeners={{
              tabPress: (e) => {
                setTitleAppbar("Account");
              },
            }}
            name="AccountScreen"
            component={AccountScreens}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator> */}


        <Drawer.Navigator
          initialRouteName="Contact"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Contact" component={ContactsScreens} />
          <Drawer.Screen name="Favorite" component={FavoritessScreens} />
          <Drawer.Screen name="Account" component={AccountScreens} />
        </Drawer.Navigator>

      </NavigationContainer>
    </PaperProvider >


    // Demo Style
    // <View style={styles.container} >
    //   <View style={styles.redbox}></View>
    //   <View style={styles.bluebox}></View>
    //   <View style={styles.blackbox}></View>
    // </View>

    // Demo Component Login
    // <View style={{ flex: 1, backgroundColor: 'aqua', justifyContent: 'center' }}>
    //   <Login />
    // </View>

    // Demo Component Cat
    //   <View style={styles.container}>
    //   <Cat Name="t" />
    //   <Cat Name="t1" />
    //   <Cat Name="t2s" />
    // </View>

    // Demo Component ListView
    // <View style={styles.container}>
    //   <ListView />
    // </View>

    // Demo Component Image
    // <View style={styles.container}>
    //   <Image
    //     style={{ width: '100%', height: '100%' }}
    //     source={require("./assets/splash.png")} />
    // </View>

    // Demo Component Animations
    // <View style={styles.container}>
    //   <Animations />
    // </View>

    // Demo props 
    // <View style={styles.container}>
    //   <Child onData={data} onDemo={handleDemo} />
    // </View>

    // Demo ScrollView 
    // <View style={styles.container}>
    //   <SafeAreaView>
    //     <ScrollView>
    //       <Text style={{ fontSize: 50 }} >Lỗi này xảy ra do chính sách thực thi PowerShell trên hệ thống Windows của bạn đang ngăn chặn việc chạy scripts. Đây là một tính năng bảo mật của PowerShell.
    //         Để giải quyết vấn đề này, bạn có thể tạm thời thay đổi chính sách thực thi để cho phép chạy scripts.
    //         Cảnh báo: Hãy cẩn trọng khi thay đổi chính sách thực thi. Việc cho phép chạy tất cả các scripts có thể tạo ra rủi ro bảo mật. Luôn đảm bảo rằng bạn biết mình đang chạy script từ nguồn nào.
    //         Mở PowerShell với quyền quản trị (Run as Administrator).
    //         Nhập lệnh sau để đặt chính sách thực thi thành Unrestricted Lỗi này xảy ra do chính sách thực thi PowerShell trên hệ thống Windows của bạn đang ngăn chặn việc chạy scripts. Đây là một tính năng bảo mật của PowerShell.
    //         Để giải quyết vấn đề này, bạn có thể tạm thời thay đổi chính sách thực thi để cho phép chạy scripts.
    //         Cảnh báo: Hãy cẩn trọng khi thay đổi chính sách thực thi. Việc cho phép chạy tất cả các scripts có thể tạo ra rủi ro bảo mật. Luôn đảm bảo rằng bạn biết mình đang chạy script từ nguồn nào.
    //         Mở PowerShell với quyền quản trị (Run as Administrator).
    //         Nhập lệnh sau để đặt chính sách thực thi thành UnrestrictedLỗi này xảy ra do chính sách thực thi PowerShell trên hệ thống Windows của bạn đang ngăn chặn việc chạy scripts. Đây là một tính năng bảo mật của PowerShell.
    //         Để giải quyết vấn đề này, bạn có thể tạm thời thay đổi chính sách thực thi để cho phép chạy scripts.
    //         Cảnh báo: Hãy cẩn trọng khi thay đổi chính sách thực thi. Việc cho phép chạy tất cả các scripts có thể tạo ra rủi ro bảo mật. Luôn đảm bảo rằng bạn biết mình đang chạy script từ nguồn nào.
    //         Mở PowerShell với quyền quản trị (Run as Administrator).
    //         Nhập lệnh sau để đặt chính sách thực thi thành Unrestricted
    //       </Text>
    //     </ScrollView>
    //   </SafeAreaView>
    // </View>

    //Demo Custom Button
    // <View style={styles.container}>
    //   <TouchableHighlight
    //     onPress={() => alert('demo')}
    //     style={{ backgroundColor: 'aqua', width: 100, height: 50, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text style={{}}>
    //       Demo Touch
    //     </Text>
    //   </TouchableHighlight>
    // </View>


    // //Demo Switch
    // <View style={styles.container}>
    //   <Switch
    //     trackColor={{ false: 'red', true: 'yellow' }}
    //     thumbColor={isEnable ? 'green' : 'qua'}
    //     value={isEnable}
    //     onValueChange={() => setisEnable(!isEnable)}
    //   />
    // </View>


    // //Demo Banner Paper
    // <View style={{ flex: 1 }}>
    //   <Banner
    //     visible={visiable}
    //     icon={"account"}
    //     actions={[
    //       {
    //         label: 'ok',
    //         onPress: () => setVisiable(!visiable)
    //       }
    //     ]}
    //   >
    //     Demo Banner RN Paper
    //   </Banner>
    // </View>


    // // Demo Login2
    // <View style={styles.container}>
    //   <ImageBackground
    //     resizeMode="cover"
    //     style={styles.ImageBackground}
    //     source={require("./assets/vuong-quoc-anh.jpg")}>
    //     <View style={styles.Image}>
    //       <Image
    //         style={styles.Image}
    //         source={require("./assets/la-co-nuoc-anh-1.jpg")}
    //       />
    //     </View>
    //     <View style={{ ...styles.Login, alignSelf: 'center' }}>
    //       <Login />
    //     </View>
    //   </ImageBackground>
    // </View>

    //Demo Drawer
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Drawer.Navigator
    //       initialRouteName="Home"
    //       drawerContent={(props) => <CustomDrawerContent {...props} />}
    //     >
    //       <Drawer.Screen name="Home" component={HomeScreen} />
    //       <Drawer.Screen name="Detail" component={DetailsScreen} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
    // </View>

  )

}

