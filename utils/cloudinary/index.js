export const baseUrl = (slug, quality='eco', fileType='png') => {
  
  return `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:${quality}/v1654597814/ELI/${slug}.${fileType}`
}