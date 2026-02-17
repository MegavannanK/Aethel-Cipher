'use client'
import { Users, Server, Globe, Clock } from 'lucide-react'
import MotionWrapper from '@/components/MotionWrapper'

const stats = [
    { value: '150+', label: 'Projects Delivered', icon: Users },
    { value: '99.9%', label: 'Uptime SLA', icon: Server },
    { value: '50+', label: 'Enterprise Clients', icon: Globe },
    { value: '24/7', label: 'Global Support', icon: Clock },
]

export default function About() {
    return (
        <section className="relative py-20 px-6 bg-background">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <MotionWrapper>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Powering the next wave of <span className="text-primary">intelligent systems</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            We are an AI &amp; Cloud technology company building products and services that transform how businesses operate. From design and prototyping to full-scale cloud architecture, we deliver solutions that push the boundaries of what&apos;s possible.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our team of engineers, designers, and AI researchers work at the intersection of cutting-edge research and practical application, ensuring every solution we build is robust, scalable, and future-proof.
                        </p>
                    </MotionWrapper>

                    {/* Right: Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <MotionWrapper
                                key={i}
                                delay={0.2 + i * 0.1}
                                className="glass-card p-6 text-center transition-all duration-300 hover:shadow-lg bg-card border border-border rounded-xl"
                            >
                                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <stat.icon className="h-5 w-5" />
                                </div>
                                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
