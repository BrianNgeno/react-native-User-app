import React from "react";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList,Image } from "react-native";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';


function HomeScreen(props) {
  const navigation = useNavigation();
  const menuItems = [
    {
      title: "Take Picture",
      icon: {
        name: "camera",
        backgroundColor: colors.light,
      },
      targetScreen:"",
    }, 
    {
      title: "Record Video",
      icon: {
        name: "video",
        backgroundColor: colors.medium,
        
      },
      targetScreen:"",
      
    },
    {
      title: "Upload Picture",
      icon: {
        name: "upload",
        backgroundColor:colors.medium,
      },
      targetScreen:"Upload Image",
    },
    {
      title: "Upload Video",
      icon: {
        name: "upload",
        backgroundColor: colors.light,
      },
      targetScreen:"",
    },
  ];

    return (
    <Screen>
      
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/phone_road.jpeg")}/>
        <AppText style={{fontWeight:'bold'}}>Quick Links</AppText>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  
                  
                />
              }
              onPress={()=> navigation.navigate(item.targetScreen )}
              
            />
          )}
          style={{}}
        />
      </View>
     
    </Screen>
  );
}


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius:25,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colors.green,
    fontSize: 20,
  },
});
export default HomeScreen;
