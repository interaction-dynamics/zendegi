import { IKCore } from 'imagekitio-react'
// Generate image URL
const imagekit = new IKCore({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  authenticationEndpoint: process.env.IMAGEKIT_AUTHENTICATION_ENDPOINT,
})

export default imagekit
