import {
    CommonActions,
    StackActions,
    NavigationContainerRef,
} from '@react-navigation/native';
import {Keyboard, ToastAndroid, BackHandler, Platform} from 'react-native';
import IconFont from '../iconfont';
class NavigationHelper {
    navigator: NavigationContainerRef;
    setNavigator(ref: any) {
        if (ref != null) {
            this.navigator = ref;
        }
    }

    setParams = (params: any) => {
        if (this.navigator != null) {
            console.log(this.navigator);
            this.navigator.setParams(params);
        }
    };
}
const navigation = new NavigationHelper();
export default navigation;
