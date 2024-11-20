import NutsCounter from '@/components/nuts/NutsCounter';
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';

export default async function NutsPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect('/auth');
  }

  return (
    <div className="flex">
      Hoola! 
      <NutsCounter />
    </div>
  )
}