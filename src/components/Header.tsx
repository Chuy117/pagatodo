import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { headerProps } from '../interfaces/headerInterface';

export const Header = ({ title }: headerProps) => {
    return (
        <View>
            <Text style={styles.header}>{title}</Text>
        </View>
    )
}
