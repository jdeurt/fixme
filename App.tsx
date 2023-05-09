import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import {HomeScreen} from "./lib/screens/home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavBar} from "./lib/components/nav-bar";
import {BrandColor} from "./lib/structs/brand-color";
import {useState} from "react";
import {SettingsScreen} from "./lib/screens/settings";
import {Screen} from "./lib/structs/routing";
import {CameraScreen} from "./lib/screens/camera";
import {useHydration} from "./lib/hooks/use-hydration";
import {SplashScreen} from "./lib/screens/splash";

const Stack = createNativeStackNavigator();

export const App = () => {
    const [currentScreen, setCurrentScreen] = useState(Screen.HOME);

    const isHydrated = useHydration();

    const navigationRef = useNavigationContainerRef<Record<string, unknown>>();

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {backgroundColor: BrandColor.SLATE},
                        animation: "fade",
                        animationDuration: 0.5,
                    }}>
                    {isHydrated ? (
                        <Stack.Group>
                            <Stack.Screen
                                component={HomeScreen}
                                listeners={{
                                    focus: () => setCurrentScreen(Screen.HOME),
                                }}
                                name="Home"
                            />
                            <Stack.Screen
                                component={CameraScreen}
                                listeners={{
                                    focus: () => setCurrentScreen(Screen.CAMERA),
                                }}
                                name="Camera"
                            />
                            <Stack.Screen
                                component={SettingsScreen}
                                listeners={{
                                    focus: () => setCurrentScreen(Screen.SETTINGS),
                                }}
                                name="Settings"
                            />
                        </Stack.Group>
                    ) : (
                        <Stack.Group>
                            <Stack.Screen component={SplashScreen} name="Splash" />
                        </Stack.Group>
                    )}
                </Stack.Navigator>
            </NavigationContainer>

            <NavBar
                currentScreen={currentScreen}
                navigate={(route: string) => navigationRef.navigate(route)}
                style={{display: isHydrated ? "flex" : "none"}}
            />
        </SafeAreaProvider>
    );
};
