import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 30}px;
  flex: 1;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 120px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const UserAvatar = styled.Image`
  width: 126px;
  height: 126px;
  border-radius: 63px;
  align-self: center;
`;
