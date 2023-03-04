const msBingApiURL = import.meta.env.VITE_MS_BING_URL
const msBingApiKey = import.meta.env.VITE_MS_BING_KEY
const msClientID = import.meta.env.VITE_MS_CLIENT_ID

// the free plan from bing search api limits 3 requests per second
const DELAY = 600

const requestImage = (name, community, key) => {
  const params = new URLSearchParams({
    q: `${name} ${community} character face picture`,
    safeSearch: "moderate",
    mkt: "en-us",
    count: 1,
  })

  return fetch(`${msBingApiURL}?${params}`, {
    headers: {
      "Ocp-Apim-Subscription-Key": msBingApiKey,
      "X-MSEdge-ClientID": msClientID,
      Accept: "application/json",
    },
  })
    .then(dt => {
      if (dt.status < 400) return dt.json()
      return dt.json().then(({ error, errors }) => {
        throw new Error(error?.message || errors[0]?.message)
      })
    })
    .then(({ value }) =>
      Promise.resolve({ key, value: value?.[0]?.contentUrl })
    )
    .catch(err => console.error(err.message))
}

export const requestAllImages = async survivors => {
  const requests = survivors.map(({ id, name, community }, ind) =>
    new Promise(resolve => setTimeout(resolve, DELAY * ind)).then(() =>
      requestImage(name, community, id)
    )
  )
  return await Promise.all(requests)
}
