// get method
export function getAerodromes() {
    return fetch('https://udeyou.s3.sa-east-1.amazonaws.com/db.json')
      .then(data => data.json())
}