import React, { useContext } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import AuthContext from "../auth/context";
import authStorage from '../auth/storage';

const menuItems = [
  {
    title: "MyListing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.light,
    },
  }, 
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen:"Messages",
  },
];
function AccountScreen({navigation}) {
  const {user, setUser} = useContext(AuthContext);

  const handleLogout = () =>{
    setUser(null);
    authStorage.removeToken();
  };
  console.log(user);
    return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.username}
          subTitle={user.role}
          image={require("../assets/avator.webp")}
        />
      </View>
      <View style={styles.container}>
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
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={
            <Icon name="logout" backgroundColor="grey"/>       
        }
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default AccountScreen;
