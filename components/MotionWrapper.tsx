'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    viewportOnce?: boolean;
}

export default function MotionWrapper({
    children,
    className,
    delay = 0,
    viewportOnce = true,
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: viewportOnce, margin: '-100px' }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for "premium" feel
                delay: delay
            }}
            className={clsx(className)}
        >
            {children}
        </motion.div>
    );
}
