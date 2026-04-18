import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    resume: defineCollection({
      type: 'page',
      source: 'resume/*.md',
      schema: z.object({
        title: z.string().optional(),
        order: z.number().optional(),
        name: z.string().optional(),
        role: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        github: z.string().optional(),
        portfolio: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string().optional(),
        summary: z.string().optional(),
        period: z.string().optional(),
        role: z.string().optional(),
        thumbnail: z.string().optional(),
        gallery: z
          .array(
            z.object({
              src: z.string(),
              alt: z.string().optional(),
            }),
          )
          .optional(),
        tags: z.array(z.string()).optional(),
        techStack: z.record(z.string(), z.array(z.string())).optional(),
        highlights: z.array(z.string()).optional(),
        order: z.number().optional(),
        featured: z.boolean().optional(),
        aiGenerated: z.boolean().optional(),
        workType: z.enum(['personal', 'company']).optional(),
        category: z.string().optional(),
        liveUrl: z.string().url().optional(),
        demoLinks: z
          .array(
            z.object({
              label: z.string(),
              url: z.string().url(),
            }),
          )
          .optional(),
        testAccounts: z
          .array(
            z.object({
              type: z.string(),
              email: z.string(),
              password: z.string(),
              role: z.string().optional(),
            }),
          )
          .optional(),
      }),
    }),
  },
})
