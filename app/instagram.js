import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import FeedPost from './components/presentation/feedPost';

class Instagram extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.igHeader, {marginTop: StatusBar.currentHeight}]}>
                    <Image 
                        style={styles.igHeaderImage}
                        source={{
                            uri: "https://fontmeme.com/images/instagram-new-logo.png"
                        }}
                    />
                </View>
                <Text style={{ marginTop: StatusBar.currentHeight }}>
                    Open up App.js to start working on your app!
                </Text>
                <FeedPost />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        width: 100 + "%",
        height: 100 + "%",
    },
    igHeader: {
        width: 100 + "%",
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#6F6F6F",
        backgroundColor: "rgb(250,250,250)",
    },
    igHeaderImage: {
        width: 120,
        height: 40
    }
});
export default Instagram;