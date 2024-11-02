module.exports = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
        {
            name: 'removeStyleElement',
        },
        {
            name: 'removeAttrs',
            params: {
                attrs: ['fill', 'style', 'stroke'],

            },
        },
    ],
};
