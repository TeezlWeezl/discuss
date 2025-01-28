import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();

  if (session?.user)
    return (
      <>
        <form action={actions.signOut}>
          <Button type="submit">Sign out</Button>
        </form>
        <Profile />
      </>
    );

  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <Profile />
    </>
  );
}
