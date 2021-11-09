export function registrate(user) {
    return fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(
        (data) => {
          data.json()
        }
    )
}

export function login(user) {
    return fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(
        (data) => {
          data.json()
            .then(
              (resp) => {
                window.sessionStorage.setItem('token', JSON.stringify(resp.token))
            })
        }
    )
}
