const BASE_URL = import.meta.env.VITE_API_URL;
function buildUrl(params = {}) {
  return `${BASE_URL}?${new URLSearchParams(params).toString()}`;
}

export async function fetchAvailableLinks(displayConfig) {
    let url = buildUrl( { ...displayConfig } );
    // console.log(url)
    const response = await fetch(url);
    const resData = await response.json();
    // console.log(resData)
    if (!response.ok) {
        throw new Error("failed to fetch");
    }
  return resData.data;
}