import Button from '@lib/atoms/Button';
import { Fragment } from 'react';

export default async function Page() {
  return (
    <Fragment>
      <h1>Hello, Next.js!</h1>
      <Button label='Click me'></Button>
    </Fragment>
  );
}
