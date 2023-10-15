const useFormatDate = () => {
  return (date: string | Date, options: Intl.DateTimeFormatOptions) => {
    const actualDate: Date = typeof date === 'string' ? new Date(date) : date

    return new Intl.DateTimeFormat('en-US', options).format(actualDate)
  }
}
export default useFormatDate
