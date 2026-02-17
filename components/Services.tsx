'use client'
import { motion } from 'framer-motion'
import {
    Brain,
    Cloud,
    Palette,
    Zap,
    Lock,
    BarChart3
} from 'lucide-react'

const services = [
    {
        icon: Brain,
        title: 'AI & Machine Learning',
        description: 'Custom AI models, natural language processing, computer vision, and intelligent automation for your business workflows.',
        tags: ['LLMs', 'Computer Vision', 'MLOps'],
    },
    {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'Scalable, resilient cloud infrastructure on AWS, GCP, and Azure. Microservices, serverless, and Kubernetes at scale.',
        tags: ['AWS', 'GCP', 'Kubernetes'],
    },
    {
        icon: Palette,
        title: 'Design & Prototyping',
        description: 'User-centered design, interactive prototypes, and design systems that bring your digital products to life.',
        tags: ['UI/UX', 'Design Systems', 'Figma'],
    },
    {
        icon: Zap,
        title: 'Full-Stack Development',
        description: 'Modern web and mobile applications built with React, Next.js, Node.js, and cloud-native architectures.',
        tags: ['React', 'Next.js', 'Node.js'],
    },
    {
        icon: Lock,
        title: 'DevOps & Security',
        description: 'CI/CD pipelines, infrastructure as code, security audits, and automated monitoring for production-grade systems.',
        tags: ['CI/CD', 'Terraform', 'Security'],
    },
    {
        icon: BarChart3,
        title: 'Data Engineering',
        description: 'Real-time data pipelines, warehousing, ETL processes, and analytics dashboards for data-driven decisions.',
        tags: ['Spark', 'BigQuery', 'dbt'],
    },
]

export default function Services() {
    return (
        <section id="services" className="relative py-24 px-6 bg-secondary/30">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        End-to-end technology solutions powered by artificial intelligence and modern cloud infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <service.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
