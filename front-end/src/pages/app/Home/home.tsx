import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    CalendarCheck, Check, LayoutGrid, Zap, Recycle,
    Handshake,
    Star,
    PhoneCall,
    Globe,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    ListCheck
} from "lucide-react"
import { Link } from "react-router-dom"
import solarImage from "../../../assets/imgameSolar.png"
import { Feature } from "./Feature"

const etapas = [
    'Estudo da necessidade',
    'Validação técnica',
    'Aceite do projeto',
    'Regulamentação do projeto',
    'Instalação e configuração',
    'Troca relógio medidor',

];

export function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800 ">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
                    <nav className="space-x-6">
                        <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
                        <a href="#about" className="text-sm font-medium hover:text-primary">Quem somos</a>
                        <a href="#etapas" className="text-sm font-medium hover:text-primary">Etapas</a>
                        <a href="#enerSave" className="text-sm font-medium hover:text-primary">Por que EnerSave?</a>
                        <a href="/dashboard" className="text-sm font-medium hover:text-primary">Cálculo PayBack</a>
                        <Link to="/sign-in">
                            <Button variant="outline" className="text-sm">Login</Button>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://mabin.com.br/wp-content/uploads/2024/01/painel-residencia-1.webp")'
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 67%, rgba(0,0,0,0) 100%)',
                        opacity: 0.92,
                        transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s'
                    }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Invista em energia solar e <br /> reduza seus custos a longo prazo
                        </h2>
                        <p className="text-lg text-gray-100 mb-4">
                            Sua casa pode produzir a própria eletricidade, de forma econômica, sustentável e limpa.
                        </p>
                        <p className="text-lg text-gray-100 mb-6">
                            Garanta um futuro com mais economia e responsabilidade para toda a sua família.
                        </p>
                        <Button className="font-semibold px-6 py-3 rounded">
                            <a href="https://wa.me/5515988168203" target="_blank">
                                PEDIR UM ORÇAMENTO
                            </a>
                        </Button>
                    </div>

                </div>
            </section>



            {/* Sobre a empresa */}

            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-2">ENERGIA SOLAR PARA SUA RESIDÊNCIA</h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Conheça alguns dos seus benefícios
                    </p>

                    <div className="grid grid-cols-12 gap-6 text-left">
                        {/* Primeira linha: 2 cards com col-span-6 (50%) */}
                        <Card className="col-span-12 md:col-span-6 bg-white rounded-2xl shadow p-6 h-[240px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900"> Redução nos custos de até 90%</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A energia solar ajuda a diminuir os custos com energia elétrica a curto prazo em até 90%. Não se preocupe mais com contas altas de energia em sua residência.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="col-span-12 md:col-span-6 bg-white rounded-2xl shadow p-6 h-[240px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Pagamento facilitado</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Condições acessíveis e parcelas que cabem no seu bolso.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Segunda linha: 4 cards com col-span-3 (25%) */}
                        <Card className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-2xl shadow p-6 h-[220px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Vida útil longa</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Equipamentos duram mais de 25 anos com alta eficiência.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-2xl shadow p-6 h-[220px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Valorização do imóvel</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Imóveis com energia solar são mais atrativos no mercado.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-2xl shadow p-6 h-[220px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Baixa manutenção</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Poucos cuidados e durabilidade por décadas.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-2xl shadow p-6 h-[220px]">
                            <Separator className="w-6  bg-primary h-1 mb-4" />
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Monitoramento remoto</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Acompanhe a produção de energia pelo app, em tempo real.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            {/* About Us */}
            <section id="about" className="bg-white px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto font-signika">
                <div className="flex flex-col justify-center w-full  mx-auto " style={{ paddingRight: "6em", paddingLeft: "1.8em" }}>
                    <p className="text-2xl  text-gray-800 uppercase mb-5" >
                        NÓS PODEMOS TE AJUDAR!
                    </p>
                    <h1 className="text-5xl font-bold mb-5">
                        Somos uma empresa de engenharia <br /> elétrica especialista em energia solar
                    </h1>

                    <p className="text-lg text-gray-800 mb-5">
                        Na ENERSAVE somos apaixonados por energia solar e comprometidos em primeiro lugar com nossos
                        clientes, buscando um futuro mais eficiente e sustentável para as residências. Fundada com
                        a visão de tornar a energia solar de alta qualidade acessível a todos, a EnerSave é a sua única
                        parceira confiável para soluções energéticas inovadoras e ecológicas.
                    </p>

                    <Button className=" font-semibold px-6 py-2 rounded-none w-fit">
                        SABER MAIS
                    </Button>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="aspect-video overflow-hidden rounded-md shadow-lg mb-3">
                        <img src={solarImage}></img>
                    </div>

                    <p className="text-center text-lg font-semibold text-black font-montserrat italic mb-3">
                        ENERSAVE É REFERÊNCIA EM QUALIDADE
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">
                        <div className="flex flex-col items-center">
                            <LayoutGrid className="h-8 w-8 mb-3" />
                            <p className="font-semibold text-lg mb-3">Projetos <br /> realizados</p>
                            <p className=" text-3xl  font-montserrat text-gray-700">+200</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Check className="h-8 w-8 mb-3" />
                            <p className="font-semibold text-lg mb-3">Clientes  <br /> satisfeitos</p>
                            <p className="text-3xl font-montserrat text-gray-700">100% </p>

                        </div>
                        <div className="flex flex-col items-center">
                            <Zap className="h-8 w-8 mb-3" />
                            <p className=" font-semibold text-lg mb-3">Eficiência dos <br /> projetos</p>
                            <p className=" text-3xl  font-montserrat text-gray-700">100%</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CalendarCheck className="h-8 w-8 mb-3" />
                            <p className="font-semibold text-lg mb-3">Prazo médio <br /> de entrega</p>
                            <p className=" text-3xl font-montserrat text-gray-700 ">45 DIAS</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gray-100 py-12"></div>
            <section id="etapas" className="py-16 px-4 text-center max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-black uppercase mb-2">
                    Somos a empresa integradora <br /> mais rápida do Brasil
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                    Veja quais são as 06 etapas que seu projeto irá passar até o início da geração de energia elétrica para a sua residência.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 justify-items-center">
                    {etapas.map((etapa, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center text-white bg-primary text-xl font-bold mb-4">
                                {index + 1}
                            </div>
                            <p className="font-semibold text-black max-w-[140px]">
                                {etapa}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="bg-gray-100 py-12"></footer>

            {/*'POR QUE ESCOLHER A ENERSAVE?'*/}
            <section id="enerSave" className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Texto à esquerda */}
                    <div>
                        <p className="text-sm text-muted-foreground font-semibold uppercase mb-2">
                            Por que escolher a ENERSAVE?
                        </p>
                        <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
                            Nossa missão é <br /> levar qualidade <br /> para nossos clientes
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            Já falamos que somos apaixonados por energia solar certo? Então vamos repetir!
                            Nosso compromisso em levar sempre o melhor projeto, melhores equipamentos,
                            melhor atendimento, melhor relacionamento e melhor suporte é um valor{' '}
                            <span className="italic font-medium">inegociável</span>.
                        </p>
                        <p className="text-muted-foreground">
                            Com a ENERSAVE você jamais irá se tornar um órfão solar. Enquanto você for nosso
                            cliente, nós andaremos ao seu lado em todos os momentos, assim você terá o melhor
                            benefício possível da tecnologia.
                        </p>
                    </div>

                    {/* Cards à direita */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Feature
                            icon={<Recycle className="text-primary " style={{ width: 70, height: 70 }} />}
                            title="Empresa de Engenharia Elétrica"
                            description="Não somos aventureiros, somos uma empresa de engenharia elétrica homologada e certificada."
                        />
                        <Feature
                            icon={<Handshake className="text-primary " style={{ width: 70, height: 70 }} />}
                            title="Responsabilidade e Compromisso"
                            description="Temos orgulho em dizer que nosso compromisso é com o cliente. Honestidade, transparência e confiabilidade são marcas registradas da ENERSAVE."
                        />
                        <Feature
                            icon={<Star className="text-primary " style={{ width: 50, height: 50 }} />}
                            title="Especialistas Certificados"
                            description="Nossa equipe de fato é especialista no mercado, com quase uma década de experiência em todos os cenários possíveis de aplicação da energia solar."
                        />
                        <Feature
                            icon={<ListCheck className="text-primary " style={{ width: 50, height: 50 }} />}
                            title="Qualidade acima de tudo"
                            description="Qualidade acima de tudo: trabalhamos com os melhores distribuidores, com as melhores fabricantes de equipamentos e com as melhores pessoas!"
                        />
                        <Feature

                            icon={<PhoneCall className="text-primary " style={{ width: 40, height: 40 }} />}
                            title="Pós-venda premium"
                            description="Clientes ENERSAVE contam com um suporte premium para todas as necessidades e etapas do projeto, principalmente após o início de operação da sua usina."
                        />
                        <Feature
                            icon={<Globe className="text-primary " style={{ width: 50, height: 50 }} />}
                            title="Atendimento dedicado a você"
                            description="Nós queremos te ouvir, entender sua necessidade e apresentar o melhor projeto com a melhor tecnologia possível! Não queremos te vender a qualquer custo ou qualquer coisa."
                        />
                    </div>
                </div>
            </section>
            <footer className="bg-gray px-4 py-12 text-sm bg-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Coluna 1 - Contato */}
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold">Telefone:</p>
                            <p>+55 (15) 98816.8203</p>
                        </div>

                        <div>
                            <p className="font-semibold">Endereço:</p>
                            <p>
                                Rua Comendador Oetterer, 124, Centro<br />
                                Sorocaba – São Paulo – Brasil<br />
                                Cep 18010-130
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">E-mail para contato:</p>
                            <p>contato@enersave.com.br</p>
                        </div>

                        <div>
                            <p className="font-semibold">WhatsApp:</p>
                            <Button variant="default" className="primary">
                                <a href="https://wa.me/5515988168203" target="_blank">
                                    CLIQUE AQUI
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Coluna 2 - Links rápidos + selos */}
                    <div className="text-center md:text-left space-y-4">
                        <div>
                            <p className="font-semibold mb-2">Links rápidos</p>
                            <a href="#" className="block hover:underline">Site Institucional</a>
                        </div>

                        <div className="flex justify-center md:justify-start gap-3">
                            <a href="#" aria-label="Facebook">
                                <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <Youtube className="w-5 h-5 hover:text-primary transition-colors" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
                            </a>
                        </div>

                    </div>

                    {/* Coluna 3 - Mapa */}
                    <div>
                        <p className="font-semibold mb-2">Nossa localização</p>
                        <iframe
                            title="Mapa localização"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.645226837135!2d-47.45532852482872!3d-23.472585258859328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cea48c04d1d9%3A0x785ac06e9f8ffb74!2sRua%20Comendador%20Oetterer%2C%20124%20-%20Centro%2C%20Sorocaba%20-%20SP%2C%2018010-130!5e0!3m2!1spt-BR!2sbr!4v1715443917397!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="rounded-md"
                        ></iframe>
                    </div>
                </div>

                {/* Rodapé final */}
                <div className="text-center text-xs mt-10 border-t border-white/20 pt-4">
                    <p className="font-semibold text-primary">ENERSAVE</p>
                    <p className="mt-1">Política de Cookies | Política de Privacidade</p>
                    <p className="mt-1">Copyright © 2025 EnerSave</p>
                </div>
            </footer>
        </div>
    )
}
