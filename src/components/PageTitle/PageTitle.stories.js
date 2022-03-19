import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PageTitle from './index';

storiesOf('PageTitle', module).add('PageTitle Component', () => <PageTitle />);