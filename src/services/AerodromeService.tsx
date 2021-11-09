// getting data from api
export function getAerodromes() {
    return fetch('http://localhost:3333/aerodromes')
      .then(data => data.json())
}