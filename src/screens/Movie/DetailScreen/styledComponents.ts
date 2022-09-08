import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const WishlistButton = styled.TouchableOpacity`
  background-color: ${props =>
    props.parentScreen === 'comedy' ? 'green' : 'blue'};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

export const Key = styled.Text`
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
  overflow: hidden;
`;

export const Value = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const RightArea = styled.View`
  padding: 10px;
  flex: 1;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-top: 20px;
  line-height: 26px;
  font-family: ${props =>
    props.parentScreen === 'comedy'
      ? 'Courier'
      : props.parentScreen === 'drama'
      ? 'Gill Sans'
      : 'Trebuchet MS'};
`;

export const Image = styled(FastImage)`
  height: 220px;
  width: 160px;
`;
