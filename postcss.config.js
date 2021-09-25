module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 37.5;
                // return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
    },
};
