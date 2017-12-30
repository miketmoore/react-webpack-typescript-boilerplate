import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Hello from '../src/components/Hello'
storiesOf('Welcome', module).add('to Storybook', () => <Hello bg="blue" color="white">Hello, world!</Hello>)
