// stories/AntButton.stories.tsx

import {ComponentMeta, StoryObj} from '@storybook/react';

import {Button as AntButton} from '@ant-design/react-native';

export default {
  title: 'components/AntButton',
  argTypes: {onPress: {action: 'pressed'}},
  component: AntButton,
} as ComponentMeta<typeof AntButton>;

export const Basic = () => <AntButton>Click me</AntButton>;
