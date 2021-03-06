import styled from "styled-components/native";
import { screenWidth } from "app/helpers/measurements";
import { colors } from "./utils";

export const CardTheme = styled.TouchableOpacity`
    background: #ffffff;
    width: ${screenWidth - 80};
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 70px;
    height: 300px;
    box-shadow: 0 0 15px #d4d2d2;
    border-radius: 20px;
`;

export const SmallCard = styled.View`
    background: #ffffff;
    width: ${screenWidth - 80};
    margin-left: 20px;
    margin-top: 20px;
    height: 125px;
    box-shadow: 0 0 15px #d4d2d2;
    border-radius: 20px;
    padding: 10px 15px;
`;

export const CardImage = styled.ImageBackground`
    height: 150px;
    borderTopLeftRadius: 20;
    borderTopRightRadius: 20;
    overflow: hidden;
`;

export const CardContent = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.textDefault}
    margin-bottom: 7px;
`;

export const Subtitle = styled.Text`
    font-weight: bold;
    color: ${colors.textWeak}
`;

export const SmallText = styled.Text`
    font-size: 12px;
    color: ${colors.textWeak}
    margin-bottom: 7px;
`;

export const SmallBoldText = styled.Text`
    font-size: 12px;
    color: ${colors.textWeak}
    margin-bottom: 7px;
    font-weight: bold;
`;

export const MediumText = styled.Text`
    font-size: 12px;
    color: ${colors.textMedium}
    margin-bottom: 7px;
`;

export const MediumBoldText = styled.Text`
    font-size: 14px;
    color: ${colors.textMedium}
    margin-bottom: 7px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    borderBottomWidth: 1px;
    border-color: #ebebeb;
    margin-bottom: 15px;
`;