import { createClient } from '@sanity/client'

export const client = createClient({
 projectId: 'i4pcg2lx',
 dataset: 'production',
 apiVersion: '2024-01-26',
 useCdn: true,
 token: process.env.skqkhmxBIOywCpNylr4YCtIf4nQLtOXYQw5UH4L4LlzwRynIAE5fPCMwuykEyHZlOEYXpxGOaqdHqbJqjHQf7ii7faSHb2QCGWFJlHVguCkAZZnmwvbWrVIb7H8JrUs1p1hTttDGJYQNDZoMzn6vlpDdx5J8SjN9I66JGSYVRUu683n0Oh5c,
 ignoreBrowserTokenWarning: true
})