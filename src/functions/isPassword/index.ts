
export const isPassword = (password: string) => {
    return (
        password.search(/[a-z]/) >= 0 &&
        password.search(/[A-Z]/) >= 0 &&
        password.search(/[0-9]/) >= 0 &&
        password.length >= 8)
}
