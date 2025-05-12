import { Separator } from "@/components/ui/separator"
import { SolarCalculator } from "@/pages/app/FormularioSolar/form"
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from "./ui/button"
import { Zap } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex justify-between w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center">
          <div >
            <a
              href="/"
              className="flex items-center gap-2  font-medium"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Zap className="size-4" />
              </div>
              <span className="font-semibold">EnerSave</span>
            </a>
          </div>
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Simulação de Calculo PayBack</h1>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button className="px-3 py-1.5 rounded-lg text-sm font-medium">
              Simular
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" />
            <Dialog.Content className="fixed inset-0 z-50  justify-center  p-6 rounded-lg  max-w-md mx-auto flex flex-col">

              <SolarCalculator />

              <Dialog.Close asChild>
                <button className="absolute top-2 right-2 text-gray-600">Fechar</button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
