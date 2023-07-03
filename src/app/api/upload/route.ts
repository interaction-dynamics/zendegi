import { NextResponse, NextRequest } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { v4 as uuidv4 } from 'uuid'

const last = (array: string[]) => array[array.length - 1]

/**
 * https://upmostly.com/next-js/how-to-upload-a-file-to-s3-with-next-js
 * https://stackoverflow.com/questions/67127375/s3-getsignedurl-v2-equivalent-in-aws-javascript-sdk-v3
 */
export async function POST(request: NextRequest) {
  try {
    const { filename, fileType, eventSlug } = await request.json()

    if (!filename || !fileType || !eventSlug) {
      return NextResponse.json(
        { error: 'one of parameters is missing' },
        { status: 400 },
      )
    }

    const extension = last(filename.split('.'))

    const imageUrl = `${uuidv4()}.${extension}`

    const key = `pictures/${eventSlug}/${imageUrl}`

    console.log('key', key)

    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
      },
    })

    console.log('s3 client initialized')

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      ContentType: fileType,
    })

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 5 * 60 })

    return NextResponse.json({ imageUrl, signedUrl })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
}

// https://zendegi-gallery.s3.us-east-2.amazonaws.com
