export function registrate(usuario) {
    console.log(usuario)
    return fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(
        (data) => {
          data.json()
          console.log(data)
        }
    )
}
