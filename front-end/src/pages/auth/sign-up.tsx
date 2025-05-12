import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  email: z.string().email('E-mail inválido'),
  password: z
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .regex(/[a-zA-Z]/, 'A senha deve conter pelo menos uma letra')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
})
type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>()



  async function handleSignUp(data: SignUpForm) {

  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="outline" asChild>
          <Link to="/sign-in" className="absolute right-8 top-8">
            Fazer login
          </Link>
        </Button>
        <div className="flex w-[300px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe o retorno da sua energia!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-sans text-sm font-medium">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                {...register('email')}
                className={
                  errors.email
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="password"
                className="font-sans text-sm font-medium"
              >
                Senha
              </Label>

              <Input
                id="password"
                type="password"
                {...register('password')}
                className={
                  errors.password
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="texte-sm px-2 text-center leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-2" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-2" href="">
                privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
