import { Button } from "@ant-design/react-native";
import { Text } from "react-native";
import styles from "./common_button_style";

interface IButtonProps {
  label: String;
  onPress: () => void;
  testId?: string;
}

const CommonButton: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { label, onPress, testId } = props;
  return (
    <Button onPress={onPress} type="primary" size="large" >
      <Text style={styles.buttonText}>{label}</Text>
    </Button>
  );
};
export default CommonButton;
