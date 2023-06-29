import imagekit from '~src/services/imageKit'

const images = [
  {
    url: '/default-image.jpg',
    filename: 'default-image.jpg',
    title: 'default',
  },
  {
    url: '/WhatsApp_Image_2023-06-11_at_13.04.15.jpeg',
    filename: 'WhatsApp_Image_2023-06-11_at_13.04.15.jpeg',
    title: 'wedding',
  },
  // {
  //   url: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   filename: 'photo.jpg',
  //   title: 'Fern',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
  //   filename: 'photo.jpg',
  //   title: 'Snacks',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   filename: 'photo.jpg',
  //   title: 'Mushrooms',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
  //   filename: 'photo.jpg',
  //   title: 'Tower',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   filename: 'photo.jpg',
  //   title: 'Sea star',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   filename: 'photo.jpg',
  //   title: 'Honey',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   filename: 'photo.jpg',
  //   title: 'Basketball',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   filename: 'photo.jpg',
  //   title: 'Breakfast',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
  //   filename: 'photo.jpg',
  //   title: 'Tree',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //   filename: 'photo.jpg',
  //   title: 'Burger',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //   filename: 'photo.jpg',
  //   title: 'Camera',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   filename: 'photo.jpg',
  //   title: 'Coffee',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
  //   filename: 'photo.jpg',
  //   title: 'Camping Car',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   filename: 'photo.jpg',
  //   title: 'Hats',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   filename: 'photo.jpg',
  //   title: 'Tomato basil',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
  //   filename: 'photo.jpg',
  //   title: 'Mountain',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   filename: 'photo.jpg',
  //   title: 'Bike',
  // },
]

export const galleryMock = {
  title: 'Paria Majidi & Thibault Friedrich',
  date: '2023 June 10th',
  location: 'Montréal',
  imageUrl: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  groups: [
    {
      title: 'Notary',
      images,
    },
    // {
    //   title: 'Pointe-Saint claire',
    //   images,
    // },
  ],
}
