import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const signInForm = z.object({
  email: z.string().email('E-mail inválido'),
  password: z
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .regex(/[a-zA-Z]/, 'A senha deve conter pelo menos uma letra')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
})

type SignInForm = z.infer<typeof signInForm>

type SignInProps = React.HTMLAttributes<HTMLFormElement>

export function SignIn({ className, ...props }: SignInProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  })



  async function handleSignIn(data: SignInForm) {
    navigate('/dashboard');
  }

  return (
    <>
      <Helmet title="Entrar" />
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className={cn('flex flex-col gap-6', className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Entrar na sua conta</h1>
          <p className="text-sm text-muted-foreground">
            Informe seu e-mail abaixo para acessar sua conta
          </p>
        </div>
        <div className="grid gap-6">
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
                errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
              }
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className="font-sans text-sm font-medium"
              >
                Senha
              </Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>
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
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Entrar
          </Button>
        </div>

        <div className="text-center text-sm">
          Ainda não tem uma conta?{' '}
          <a
            href="/sign-up"
            className="font-sans text-sm font-medium underline underline-offset-4"
          >
            Cadastre-se
          </a>
        </div>
      </form>
    </>
  )
}
