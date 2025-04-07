// @ts-ignore
import CracoAlias from "craco-alias";

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.paths.json",
            },
        },
    ],
    webpack: {
        configure: (webpackConfig: any) => {
            if (isProd) {
                webpackConfig.plugins = webpackConfig.plugins.filter(
                    (plugin: any) => plugin.constructor?.name !== 'ReactRefreshPlugin'
                );
            }
            return webpackConfig;
        },
    },
};
