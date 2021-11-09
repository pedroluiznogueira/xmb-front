// get method
export function getAerodromes() {
    return fetch('http://localhost:3334/aerodromes')
      .then(data => data.json())
}