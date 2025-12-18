import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ViewStyle,
    TextStyle,
} from 'react-native';

interface Pill {
    id: string;
    label: string;
}

interface PillListProps {
    pills: Pill[];
    variant?: 'default' | 'accent' | 'warning' | 'neutral';
    onPress?: (pill: Pill) => void;
    isDarkMode?: boolean;
    showAddButton?: boolean;
    onAddPress?: () => void;
}

export function PillList({
    pills,
    variant = 'default',
    onPress,
    isDarkMode = false,
    showAddButton = false,
    onAddPress,
}: PillListProps) {
    return (
        <View style={styles.container}>
            {pills.map((pill) => {
                const pillStyles = getPillStyles(variant, isDarkMode);

                return (
                    <Pressable
                        key={pill.id}
                        onPress={onPress ? () => onPress(pill) : undefined}
                        style={({ pressed }) => [
                            styles.pill,
                            pillStyles.container,
                            pressed && { opacity: 0.7 },
                        ]}
                    >
                        <Text style={[styles.text, pillStyles.text]}>
                            {pill.label}
                        </Text>
                    </Pressable>
                );
            })}

            {showAddButton && (
                <Pressable
                    onPress={onAddPress}
                    style={({ pressed }) => [
                        styles.pill,
                        styles.addPill,
                        pressed && { opacity: 0.7 },
                    ]}
                >
                    <Text style={styles.addText}>
                        + Add
                    </Text>
                </Pressable>
            )}
        </View>
    );
}

/* ------ STYLE VARIANTS ----- */

function getPillStyles(
    variant: PillListProps['variant'],
    isDarkMode: boolean
): { container: ViewStyle; text: TextStyle } {
    switch (variant) {
        case 'accent':
            return {
                container: {
                    backgroundColor: '#4A90E220',
                },
                text: {
                    color: '#4A90E2',
                },
            };

        case 'warning':
            return {
                container: {
                    backgroundColor: '#FF6B3520',
                },
                text: {
                    color: '#FF6B35',
                },
            };

        case 'neutral':
            return {
                container: {
                    backgroundColor: isDarkMode ? '#2C2C2C' : '#FFFFFF',
                },
                text: {
                    color: isDarkMode ? '#A0A0A0' : '#666666',
                },
            };

        default:
            return {
                container: {
                    backgroundColor: isDarkMode ? '#2C2C2C' : '#F0F0F0',
                },
                text: {
                    color: isDarkMode ? '#A0A0A0' : '#666666',
                },
            };
    }
}

/* ------ STYLES ------ */

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    pill: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    text: {
        fontSize: 13,
    },
    addPill: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#A0A0A0',
    },
    addText: {
        fontSize: 13,
        color: '#A0A0A0',
    },
});