import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  HOST_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import keyCenter from './keyCenter';
import {ZIM} from 'zego-zim-react-native';
import ZegoUIKitPrebuiltLiveStreaming from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

export default function Host(props) {
  const prebuiltRef = useRef();
  const {route} = props;
  const {params} = route;
  const {userID, userName, liveID} = params;

  console.log('########HostPage userID:', HOST_DEFAULT_CONFIG);

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        ref={prebuiltRef}
        appID={keyCenter.appID}
        appSign={keyCenter.appSign}
        userID={userID}
        userName={userName}
        liveID={liveID}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            console.log('########HostPage onLeaveLiveStreaming');
            props.navigation.navigate('Home');
          },
        }}
        plugins={{ZIM}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  avView: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
  },
  ctrlBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 50,
    width: '100%',
    height: 50,
    zIndex: 2,
  },
  ctrlBtn: {
    flex: 1,
    width: 48,
    height: 48,
    marginLeft: 37 / 2,
    position: 'absolute',
  },
});
