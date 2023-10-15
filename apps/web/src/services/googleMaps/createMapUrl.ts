const createMapUrl = (location: string) =>
  `https://maps.google.com/?q=${encodeURIComponent(location)}`

export default createMapUrl
