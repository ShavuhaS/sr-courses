export const validateString = (str) => {
    return (str instanceof String || typeof str === 'string')
}