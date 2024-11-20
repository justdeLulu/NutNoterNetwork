import { createClient } from '@/utils/supabase/server'

export default async function NutsCounter() {
  const supabase = await createClient();

  const { data: nuts } = await supabase.from("nuts").select();

  return <pre>{JSON.stringify(nuts, null, 2)}</pre>
}