import { createClient } from '@sanity/client'

export const client = createClient({
 projectId: 'i4pcg2lx',
 dataset: 'production',
 apiVersion: '2024-01-26',
 useCdn: true,
 perspective: 'published',
 stega: false,
 token: process.env.VITE_SANITY_TOKEN,
 ignoreBrowserTokenWarning: true
})