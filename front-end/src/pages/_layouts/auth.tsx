import { Zap } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute left-8 top-8 flex gap-2 px-4 py-2">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <a
              href="/"
              className="flex items-center gap-2 self-center font-medium"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Zap className="size-4" />
              </div>
              <span className="font-semibold">EnerSave</span>
            </a>
          </div>
        </div>

        <Outlet />
      </div>
      <div className="texte-muted-foreground flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10"></div>
    </div>
  )
}
