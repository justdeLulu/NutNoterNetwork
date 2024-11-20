import { createClient } from '@/utils/supabase/server'

export default async function SidebarComponent() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data.user || error) {
    return
  }
    
  return (
    <div>
      {data.user.user_metadata.full_name}
    </div>
  )
}