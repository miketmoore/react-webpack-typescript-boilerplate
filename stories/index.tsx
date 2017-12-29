import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

type Foo = (props:FooProps) => JSX.Element
interface FooProps {
  children?: any
}
const Foo:Foo = ({children}) => <div>{children}</div>

storiesOf('Welcome', module).add('to Storybook', () => <Foo children="Hello, World!" />)
