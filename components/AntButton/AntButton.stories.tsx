// stories/AntButton.stories.tsx
import React from 'react';
import {ComponentMeta, StoryObj} from '@storybook/react';

import {Button} from '@ant-design/react-native';
import type {ButtonProps} from '@ant-design/react-native/es/button/index';

import {View} from 'react-native';

export default {
  title: 'components/AntButton',
  argTypes: {onPress: {action: 'pressed'}},
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: StoryObj<ButtonProps> = () => {
  return (
    <View>
      <Button type="primary">Click me</Button>
    </View>
  );
};
