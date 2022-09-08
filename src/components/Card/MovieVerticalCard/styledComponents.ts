import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.TouchableOpacity`
  width: 160px;
  margin: 10px;
  height: 240px;
`;

export const Title = styled.Text`
  color: black;
  margin-top: 10px;
`;

export const Image = styled(FastImage)`
  width: 160px;
  height: 200px;
`;
