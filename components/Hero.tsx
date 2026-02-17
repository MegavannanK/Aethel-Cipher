'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GeometricBackground from './GeometricBackground'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* 3D Background */}
            <GeometricBackground />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                    Next-Generation Intelligence
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                >
                    Cloud Infrastructure <br className="hidden sm:block" />
                    <span className="gradient-text-primary">Reimagined for AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Scalable, secure, and intelligent cloud solutions designed for the modern enterprise.
                    Deploy faster and scale smarter with GrepFlow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <Link
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Start Building <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="#work"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        View Solutions
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Enterprise Grade Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>99.99% Uptime SLA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>24/7 Expert Support</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
