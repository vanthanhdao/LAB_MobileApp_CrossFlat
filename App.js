
import { Button, Image, Switch, View, Text, ScrollView, SafeAreaView, TouchableHighlight, ImageBackground } from 'react-native'
import Cat from './components/Cat'
import styles from './AppStyle'
import Login from './components/Login'
import ListView from './components/ListView'
import Animations from './components/Animations'
import Child from './components/Child'
import { useState } from 'react'
import { Banner, PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lab1_1 from './screens/Lab1_1'
import Lab1_2 from './screens/Lab1_2'
import Lab1_3 from './screens/Lab1_3'
import Lab1_4 from './screens/Lab1_4'
import Lab1_5 from './screens/Lab1_5'
import Lab1_6 from './screens/Lab1_6'
import Lab1_7 from './screens/Lab1_7'
import Lab1_8 from './screens/Lab1_8'
import Lab1_9 from './screens/Lab1_9'
import CustomNavigationBar from './components/CustomNavigationBar'


const Stack = createNativeStackNavigator();

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


  return (


    //Demo Stack Navigation, App Bar
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Lab1_9'
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Lab1_1" component={Lab1_1} />
          <Stack.Screen name="Lab1_2" component={Lab1_2} />
          <Stack.Screen name="Lab1_3" component={Lab1_3} />
          <Stack.Screen name="Lab1_4" component={Lab1_4} />
          <Stack.Screen name="Lab1_5" component={Lab1_5} />
          <Stack.Screen name="Lab1_6" component={Lab1_6} />
          <Stack.Screen name="Lab1_7" component={Lab1_7} />
          <Stack.Screen name="Lab1_8" component={Lab1_8} />
          <Stack.Screen name="Lab1_9" component={Lab1_9} />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>


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




  )

}

