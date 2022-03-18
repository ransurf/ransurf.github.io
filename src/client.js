import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'rbuymwld',
    dataset: 'production',
    useCdn: true
})