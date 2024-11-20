import { signUsingDiscord } from '@/app/auth/actions/sign-using-discord'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';

export default async function AuthentificationPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect('/');
  }

  return (
    <form>
      <Button formAction={signUsingDiscord}>Sign using Discord</Button>
    </form>
  )
}