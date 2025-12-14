import React from 'react';
import * as Icons from 'lucide-react-native';
import { LucideIcon } from 'lucide-react-native';

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 22,
  color = '#000',
  strokeWidth = 2,
}: IconProps) {
  const Lucide = Icons[name] as LucideIcon;

  return <Lucide size={size} color={color} strokeWidth={strokeWidth} />;
}
