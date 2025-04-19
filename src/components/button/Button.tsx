import React from 'react';
import {Pressable, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabledButton, style]}>
      <Text style={[styles.text, disabled && styles.disabledText, textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  disabledText: {
    color: '#9CA3AF',
  },
});

export default Button;
