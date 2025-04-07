// @ts-ignore
import CracoAlias from "craco-alias";

const isProduction = process.env.NODE_ENV === 'production';

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
            if (isProduction) {
                // Filter out React Refresh plugin in production
                webpackConfig.plugins = webpackConfig.plugins.filter(
                    (plugin: any) => plugin.constructor.name !== 'ReactRefreshWebpackPlugin'
                );
            }

            return webpackConfig;
        },
    },
};
