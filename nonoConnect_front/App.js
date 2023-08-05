// const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import MainPage from "./screens/MainPage";

const Stack = createNativeStackNavigator();

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, ScrollView } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/NotoSansKR-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
    
  );
};
export default App;

/* <ScrollView style={styles.container}>
<View style={styles.textContainer}>
<Text style= fstyles.textstyle) > 영역을 충분히 갖는 텍스트 입니다! </Text>
</View>
<View style=<styles.textContainer}>
<Text style= (styles.textStyle)>영역을 충분히 갖는 텍스트 입니다! </Text>
</View>
<View style= {styles.textContainer}>
<Text style={styles.textStyle} >영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer} >
<Text style={styles. textStyle )> 영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
MICA ETWEET192. CNCS Te) 활력을 충분히 갖는 텍스트 입니다 S Text.
</View>
<View style={styles.textContainer}>
<Text style=<styles.textStyle)>영역을 충분히 갖는 텍스트 입니다! </Text>
</View>
<View style={styles.textContainer}>
<Text style= (styles. textStyle )> 영역을 충분히 갖는 텍스트 입니다! </Text>
</View>
</ScrollView>
*/