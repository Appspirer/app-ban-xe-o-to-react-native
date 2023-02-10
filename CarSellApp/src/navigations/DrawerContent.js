import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashBoard, CustomDrawer, History } from '../screens';
import { Dimensions } from "react-native"

var { width } = Dimensions.get('window')

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerType: 'front', drawerStyle: { width: width } }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen options={{ headerShown: false }} name="DashBoard" component={DashBoard} />
            <Drawer.Screen options={{ headerShown: false }} name="History" component={History} />
        </Drawer.Navigator>
    );
}