import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import OfflineNotice from "./app/components/OfflineNotice";


export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    try {
      const token = authStorage.getToken();
      if (!token) return;
      setUser(jwtDecode(token));
      useEffect(() => {
        restoreToken();
      }, []);
    } catch {
      return null;
    }
  };
  return (
    <>
    <OfflineNotice/>
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    </>
  );
}
