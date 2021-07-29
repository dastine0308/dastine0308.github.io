// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },

    outputDir: `dist/${process.env.NODE_ENV}`,

    publicPath: '/'
}