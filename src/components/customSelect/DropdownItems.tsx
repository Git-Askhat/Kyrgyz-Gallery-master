/* External dependencies */
import { Anchor, Col, Div } from 'atomize';
import React from 'react';

/* Local dependencies */
// import formatMessage from '../../intl/formatMessage';

interface DropDownProps {
  items: string[];
  onClick: (item) => void;
  reference: any;
}

export default function DropdownItems({
  items,
  onClick,
  reference,
}: DropDownProps) {
  return (
    <Col bg="table_cell_background" overflow="auto" maxH="15rem">
      {items.map((item, index) => (
        <Anchor
          key={index}
          d="block"
          textColor="text_color"
          textAlign="left"
          p={{ y: 'auto' }}
          onClick={() => onClick(item)}
        >
          <Div p={{ x: '.5rem', y: '0.2rem' }} ref={reference}>
            {formatMessage(item)}
          </Div>
        </Anchor>
      ))}
    </Col>
  );
}
