import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/button/Button';

const IntroScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>환영합니다</Text>
        <Text style={styles.subtitle}>
          앱을 시작하기 위해 아래 버튼을 눌러주세요
        </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log('시작하기 버튼 클릭')}>
            시작하기
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default IntroScreen;
