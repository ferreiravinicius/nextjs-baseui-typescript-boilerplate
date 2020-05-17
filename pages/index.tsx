import * as React from 'react';
import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';

const Index: React.FC = () =>  {

  const [css, theme] = useStyletron();

  return (
    <>
      <Button onClick={() => console.log("Boilerplate")}>Log Text</Button>
      <p className={css({ color: theme.colors.accent600 })}> Hello!</p>
    </>
  );
};

export default Index;
