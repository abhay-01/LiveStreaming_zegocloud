import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomePage(props) {
  const navigation = useNavigation();
  const onJoinPress = isHost => {
    navigation.navigate(isHost ? 'Host' : 'Viewer', {
      userID: userID,
      userName: userID,
      liveID: liveID,
    });
  };

  const [userID, setUserID] = useState('');
  const [liveID, setLiveID] = useState('');

  useEffect(() => {
    setUserID(String(Math.floor(Math.random() * 100000)));
    setLiveID(String(Math.floor(Math.random() * 10000)));
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}>
      <Text style={styles.title}>Welcome to Live Streaming</Text>
      <Text style={styles.userID}>Your User ID: {userID}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.liveIDLabel}>Enter Live ID</Text>
        <TextInput
          placeholder="e.g. 6666"
          style={styles.input}
          onChangeText={text => setLiveID(text.replace(/[^0-9A-Za-z_]/g, ''))}
          maxLength={4}
          value={liveID}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          disabled={liveID.length === 0}
          title="Start a Live"
          onPress={() => onJoinPress(true)}
          color="#4CAF50"
        />
        <View style={styles.spacing} />
        <Button
          disabled={liveID.length === 0}
          title="Watch a Live"
          onPress={() => onJoinPress(false)}
          color="#2196F3"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  userID: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  liveIDLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {
    width: 20,
  },
});
