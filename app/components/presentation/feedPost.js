import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class FeedPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false
        }
    }
    toggleLike() {
        this.setState({
            liked: !this.state.liked
        });
    }
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

                <TouchableOpacity activeOpacity={0.8} style={styles.feedPostImage} onPress={() => this.toggleLike()} >
                {/* <View> */}
                    <Image
                        style={styles.feedPostImage}
                        source={{
                            uri: "https://i.kinja-img.com/gawker-media/image/upload/s--4vlfc0Vs--/c_scale,f_auto,fl_progressive,q_80,w_800/zhdfbwvbc2miyqyaryl9.jpg"
                        }}
                    />
                {/* </View> */}
            </TouchableOpacity>

            <View style={styles.postIconView}>
                {this.state.liked ? <Icon name="heart" size={26} color="#E11818" style={{ marginLeft: 5 }} /> : <Icon name="heart-outline" size={26} style={{ marginLeft: 5 }} />}
                
                <Image style={{width: 38, height: 38}}
                    source={require('../../../assets/download.png')}
                />
            </View>
        </View>
        );
    }
}
// backgroundColor: "#85A6F0",
const styles = StyleSheet.create({
    post: {
        width: 100 + "%",
        height: 330,
        // backgroundColor: "#E2E371",
        alignItems: 'center',
    },
    feedUserInfo: {
        width: 100 + "%",
        height: 45,
        // backgroundColor: "#71E37C",
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
    },
    postIconView: { 
        width: 100 + "%", 
        flexDirection: "row", 
        borderBottomColor: "#000", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        flex: 1,
        alignItems: "center",
        overflow: "hidden"
    }

    
});

export default FeedPost;