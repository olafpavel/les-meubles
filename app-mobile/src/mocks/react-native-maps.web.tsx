import React from 'react';
import { View, Text } from 'react-native';

const MapView = ({ children, style }: any) => (
  <View style={[{ backgroundColor: '#e8e8e8', alignItems: 'center', justifyContent: 'center' }, style]}>
    <Text style={{ color: '#666' }}>Carte (mobile uniquement)</Text>
    {children}
  </View>
);

export const Marker = ({ children }: any) => <>{children}</>;
export const Callout = ({ children }: any) => <>{children}</>;
export const Circle = ({ children }: any) => <>{children}</>;
export const Polyline = () => null;
export const Polygon = () => null;
export const PROVIDER_GOOGLE = 'google';

export default MapView;
