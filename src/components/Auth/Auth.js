export function isAuth() {
    const token = window.sessionStorage.getItem('token');
    console.log(token)
    if (token) return true;
    return false;
}