import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default{
    ...DefaultTheme,
    color:{
        ...DefaultTheme.colors,
        primary:colors.primary,
        backgroundColor:colors.white,
    }
}