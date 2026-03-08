import React from 'react';
import { motion } from 'framer-motion';

// Skeleton shimmer animation
const shimmer = {
  initial: { backgroundPosition: '200% 0' },
  animate: { backgroundPosition: '-200% 0' },
};

export const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={`bg-gradient-to-r from-muted via-muted/50 to-muted rounded-lg ${className}`}
    variants={shimmer}
    initial="initial"
    animate="animate"
    transition={{ duration: 2, repeat: Infinity }}
    style={{
      backgroundSize: '200% 100%',
    }}
  />
);

// Hero Skeleton
export const HeroSkeleton = () => (
  <section className="relative w-full h-screen overflow-hidden bg-background">
    <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10" />
  </section>
);

// About Section Skeleton
export const AboutSkeleton = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-6">
        <SkeletonLoader className="h-12 w-3/4" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-2/3" />
      </div>
    </div>
  </section>
);

// Skills Section Skeleton
export const SkillsSkeleton = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="container mx-auto">
      <SkeletonLoader className="h-12 w-1/3 mx-auto mb-12" />
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="space-y-4">
            <SkeletonLoader className="h-8 w-full" />
            <SkeletonLoader className="h-4 w-full" />
            <SkeletonLoader className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Projects Section Skeleton
export const ProjectsSkeleton = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="container mx-auto">
      <SkeletonLoader className="h-12 w-1/3 mx-auto mb-12" />
      
      {/* Filter buttons skeleton */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[...Array(7)].map((_, i) => (
          <SkeletonLoader key={i} className="h-10 w-24" />
        ))}
      </div>

      {/* Project cards skeleton */}
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4 p-6 border border-border rounded-lg">
            <SkeletonLoader className="h-6 w-full" />
            <SkeletonLoader className="h-4 w-full" />
            <SkeletonLoader className="h-4 w-3/4" />
            <div className="flex gap-2 pt-4">
              <SkeletonLoader className="h-8 w-16" />
              <SkeletonLoader className="h-8 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Certifications Section Skeleton
export const CertificationsSkeleton = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="container mx-auto">
      <SkeletonLoader className="h-12 w-1/3 mx-auto mb-12" />
      <div className="grid gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4 p-6 border border-border rounded-lg">
            <SkeletonLoader className="h-6 w-full" />
            <SkeletonLoader className="h-4 w-full" />
            <SkeletonLoader className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section Skeleton
export const ContactSkeleton = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="container mx-auto max-w-2xl">
      <SkeletonLoader className="h-12 w-1/2 mx-auto mb-12" />
      <div className="space-y-4">
        <SkeletonLoader className="h-12 w-full" />
        <SkeletonLoader className="h-12 w-full" />
        <SkeletonLoader className="h-32 w-full" />
        <SkeletonLoader className="h-12 w-full" />
      </div>
    </div>
  </section>
);

// Resume Page Skeleton
export const ResumeSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <SkeletonLoader className="h-12 w-1/2 mx-auto" />
          <SkeletonLoader className="h-6 w-1/3 mx-auto" />
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <SkeletonLoader key={i} className="h-10 w-32" />
            ))}
          </div>
        </div>

        {/* Sections */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mb-12">
            <SkeletonLoader className="h-8 w-1/4 mb-6" />
            <div className="space-y-4">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="p-6 border border-border rounded-lg space-y-3">
                  <SkeletonLoader className="h-6 w-3/4" />
                  <SkeletonLoader className="h-4 w-full" />
                  <SkeletonLoader className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Full Page Skeleton Loader
export const PageSkeleton = () => (
  <div className="min-h-screen bg-background">
    <HeroSkeleton />
    <AboutSkeleton />
    <SkillsSkeleton />
    <ProjectsSkeleton />
    <CertificationsSkeleton />
    <ContactSkeleton />
  </div>
);
