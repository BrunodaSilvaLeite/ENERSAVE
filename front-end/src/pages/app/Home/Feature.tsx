import { Card, CardContent, CardHeader } from "@/components/ui/card"

type FeatureProps = {
    icon: React.ReactNode
    title: string
    description: string
}

export function Feature({ icon, title, description }: FeatureProps) {
    return (
        <Card className="shadow-none border-none ">
            <CardHeader className="flex items-center space-x-3 flex-row">
                {icon}
                <h3 className="text-lg font-semibold leading-snug text-black">
                    {title}
                </h3>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
