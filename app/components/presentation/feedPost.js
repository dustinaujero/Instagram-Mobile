import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class FeedPost extends React.Component {
    render() {
        return (
        <View style={styles.post}>
            <View style={styles.feedUserInfo}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image 
                        style={styles.feedProPic}
                        source={{
                            uri: "https://i.kinja-img.com/gawker-media/image/upload/s--4vlfc0Vs--/c_scale,f_auto,fl_progressive,q_80,w_800/zhdfbwvbc2miyqyaryl9.jpg"
                        }}
                    />
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                        User Info Here
                    </Text>
                </View>
                <Icon name="dots-horizontal" size={25}/>
            </View>
            <Image
                style={styles.feedPostImage}
                source={{
                    uri: "https://i.kinja-img.com/gawker-media/image/upload/s--4vlfc0Vs--/c_scale,f_auto,fl_progressive,q_80,w_800/zhdfbwvbc2miyqyaryl9.jpg"
                }}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    post: {
        width: 100 + "%",
        height: 330,
        backgroundColor: "#E2E371",
        alignItems: 'center',
    },
    feedUserInfo: {
        width: 100 + "%",
        height: 45,
        backgroundColor: "#71E37C",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 7,
        justifyContent: "space-between"
    },
    feedPostImage: {
        width: 100 + "%",
        height: 250,
    },
    feedProPic: {
        height: 35,
        width: 35,
        borderRadius: 20
    }
});

export default FeedPost;