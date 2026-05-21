import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  type TouchableOpacityProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { Colors } from '@/constants/colors';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: { backgroundColor: Colors.accent },
    text: { color: Colors.white },
  },
  secondary: {
    container: { backgroundColor: Colors.success },
    text: { color: Colors.white },
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.accent,
    },
    text: { color: Colors.accent },
  },
  ghost: {
    container: { backgroundColor: 'transparent' },
    text: { color: Colors.textPrimary },
  },
  danger: {
    container: { backgroundColor: Colors.error },
    text: { color: Colors.white },
  },
};

const sizeStyles: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  sm: {
    container: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
    text: { fontSize: 14, fontWeight: '500' },
  },
  md: {
    container: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12 },
    text: { fontSize: 16, fontWeight: '600' },
  },
  lg: {
    container: { paddingVertical: 16, paddingHorizontal: 32, borderRadius: 14 },
    text: { fontSize: 17, fontWeight: '700' },
  },
};

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  fullWidth = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const vStyle = variantStyles[variant];
  const sStyle = sizeStyles[size];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          opacity: isDisabled ? 0.6 : 1,
          ...(fullWidth ? { width: '100%' } : {}),
        },
        vStyle.container,
        sStyle.container,
        style as ViewStyle,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? Colors.accent : Colors.white}
        />
      ) : (
        icon
      )}
      <Text style={[{ letterSpacing: 0.2 }, vStyle.text, sStyle.text]}>{label}</Text>
    </TouchableOpacity>
  );
}
