async function getApi() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const res = await fetch(url);
    const result = await res.json();
    if (res.ok) {
        return await result
    } else throw 'error'
}
