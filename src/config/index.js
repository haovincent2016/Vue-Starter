let baseUrl = ''
//usually for image path
if (process.env.NODE_ENV == 'production'){
    baseUrl = 'someUrl';
} else {
    baseUrl = '/'
}

export {
    baseUrl
}