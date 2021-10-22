import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    BackHandler,
    Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";

class CustomWebView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }

    handleBackButton = () => {
        return true;
    };

    // 'https://github.com/facebook/react-native'
    // https://www.youtube.com/
    // http://skp.kurious365.com
    // https://devsms.qmofi.com
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle} > K365 Kiosk </Text>
                <WebView ref={
                    (webView) => (this.webView = webView)}
                    source={{ uri: "https://skp-a-stag2.kurious365.com/" }}
                    style={styles.webContainer}
                />
            </View>
        );
    }
}

export default CustomWebView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    webContainer: {
        paddingHorizontal: 2,
    },
    titleStyle: {
        marginTop: 35,
        fontSize: 35,
        padding: 12,
        borderWidth: 0.5,
        borderColor: "#edeff2",
    },
});