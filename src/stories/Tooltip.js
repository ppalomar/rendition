import * as React from 'react'
import * as FaPlus from 'react-icons/lib/fa/spinner'
import { storiesOf, action } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import {
  Alert,
  Badge,
  BadgeSelect,
  Box,
  Button,
  CodeWithCopy,
  DropDownButton,
  Fixed,
  Flex,
  Heading,
  Txt,
  Link
} from '../'
import * as Readme from './README/Tooltip.md'

storiesOf('Core/Tooltips', module)
  .addDecorator(story => <Box m={4}>{story()}</Box>)
  .addDecorator(withReadme(Readme))
  .addWithInfo('Standard', () => {
    return (
      <Box>
        <Button
          tooltip='Tooltip on top'
          m={2}
          primary
          onPress={action('case-1')}
        >
          Tooltip on top
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on right', placement: 'right' }}
          m={2}
          secondary
          onPress={action('case-2')}
        >
          Tooltip on right
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on bottom', placement: 'bottom' }}
          m={2}
          success
          onPress={action('case-3')}
        >
          Tooltip on bottom
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on left', placement: 'left' }}
          m={2}
          tertiary
          onPress={action('case-4')}
        >
          Tooltip on left
        </Button>
        <Button
          tooltip='Tooltip on disabled button'
          m={2}
          onPress={action('case-5')}
          disabled
        >
          Tooltip on disabled button
        </Button>
      </Box>
    )
  })
  .addWithInfo('Click', () => {
    return (
      <Box>
        <Button
          tooltip={{ text: 'Tooltip on top', trigger: 'click' }}
          m={2}
          primary
          onPress={action('case-1')}
        >
          Tooltip on top
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on right',
            trigger: 'click',
            placement: 'right'
          }}
          m={2}
          secondary
          onPress={action('case-2')}
        >
          Tooltip on right
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on bottom',
            trigger: 'click',
            placement: 'bottom'
          }}
          m={2}
          success
          onPress={action('case-3')}
        >
          Tooltip on bottom
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on left',
            trigger: 'click',
            placement: 'left'
          }}
          m={2}
          tertiary
          onPress={action('case-4')}
        >
          Tooltip on left
        </Button>
      </Box>
    )
  })
  .addWithInfo('Supported Elements', () => {
    return (
      <Box>
        <Heading.h3>Alert</Heading.h3>
        <Alert tooltip='Alert tooltip' warning>
          Lorem ipsum dolor sit amet.
        </Alert>

        <Heading.h3 mt={30}>Badge</Heading.h3>
        <Badge tooltip='Badge tooltip' text='lorem' />

        <Heading.h3 mt={30}>BadgeSelect</Heading.h3>
        <BadgeSelect
          tooltip='BadgeSelect tooltip'
          items={['wpe', 'web', 'redis']}
        />

        <Heading.h3 mt={30}>Box</Heading.h3>
        <Box tooltip='Box tooltip'>Lorem ipsum dolor sit amet.</Box>

        <Heading.h3 mt={30}>Button</Heading.h3>
        <Button tooltip='Button tooltip' mr={2} mb={2}>
          Lorem ipsum
        </Button>
        <Button tooltip='Button tooltip' iconElement={<FaPlus />} mr={2} mb={2}>
          Lorem ipsum
        </Button>
        <Button tooltip='Button tooltip' mr={2} mb={2} disabled>
          Lorem ipsum
        </Button>
        <Button
          tooltip='Button tooltip'
          iconElement={<FaPlus />}
          mr={2}
          mb={2}
          disabled
        >
          <Txt>Lorem ipsum</Txt>
        </Button>

        <Heading.h3 mt={30}>CodeWithCopy</Heading.h3>
        <CodeWithCopy text='Lorem' tooltip='CodeWithCopy tooltip' />

        <Heading.h3 mt={30}>DropDownButton</Heading.h3>
        <DropDownButton
          tooltip='DropDownButton tooltip'
          mx={2}
          primary
          label={<div>DropDown</div>}
        >
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>

        <Fixed right='30px' tooltip='Fixed tooltip'>
          <Heading.h3 mt={30}>Fixed</Heading.h3>
        </Fixed>

        <Heading.h3 mt={30}>Flex</Heading.h3>
        <Flex style={{ height: 30 }} bg='red' tooltip='Flex tooltip' />

        <Heading.h3 mt={30}>Heading</Heading.h3>
        <Heading.h2 tooltip='Heading tooltip'>Hello world!</Heading.h2>

        <Heading.h3 mt={30}>Link</Heading.h3>
        <Link tooltip='Link tooltip'>Lorem ipsum dolor sit amet</Link>

        <Heading.h3 mt={30}>Txt</Heading.h3>
        <Txt tooltip='Txt tooltip'>Lorem ipsum dolor sit amet</Txt>
      </Box>
    )
  })
  .add('Styled tooltips', () => {
    return (
      <Box>
        <Button
          tooltip={{
            text: 'Lorem ipsum dolor sit amet',
            containerStyle: {
              color: 'pink',
              fontStyle: 'italic'
            }
          }}
          m={2}
          primary
          onPress={action('case-1')}
        >
          Styled tooltip container
        </Button>

        <Button
          tooltip={{
            text: 'Lorem ipsum dolor sit amet',
            arrowStyle: {
              marginLeft: -70,
              borderTopWidth: 10
            }
          }}
          m={2}
          primary
          onPress={action('case-1')}
        >
          Styled tooltip arrow
        </Button>

        <Button
          tooltip={{
            text: 'Lorem ipsum dolor sit amet',
            innerStyle: {
              borderRadius: 15
            }
          }}
          m={2}
          primary
          onPress={action('case-1')}
        >
          Styled tooltip inner
        </Button>
      </Box>
    )
  })
