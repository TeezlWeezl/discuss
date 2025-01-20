import { Button } from '@nextui-org/react';
import * as actions from '@/actions';

export default function Home() {
  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
    </>
  );
}
