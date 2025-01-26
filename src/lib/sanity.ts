import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'i4pcg2lx',
  dataset: 'production',
  apiVersion: '2024-01-26',
  useCdn: false
})