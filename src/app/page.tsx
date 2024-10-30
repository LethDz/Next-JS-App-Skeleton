import Button from '@lib/atoms/Button';
import ColorBox from '@lib/atoms/Color';
import MarginBox from '@lib/atoms/Margin';
import AtomText from '@lib/atoms/Text';
import { Fragment } from 'react';

export default async function Page() {
  return (
    <Fragment>
      <h1>Hello, Next.js!</h1>
      <Button
        label='Click me'
        className='dse-button__container'
      ></Button>
      <ColorBox
        color='error'
        width='md'
        height='md'
      ></ColorBox>
      <MarginBox
        side='top'
        space='xxxl'
      >
        <AtomText size='xl'>This is a big text</AtomText>
      </MarginBox>
    </Fragment>
  );
}
