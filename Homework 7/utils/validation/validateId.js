export const validateId = (id) => {
    return id && id > 0 && parseInt(id, 10) === id && id < (2 ** 31);
}