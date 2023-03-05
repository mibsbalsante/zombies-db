export const formatDate = date => {
  try {
    return new Intl.DateTimeFormat("en-US").format(new Date(date))
  } catch (err) {
    return "Unknown"
  }
}
