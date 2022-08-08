/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ['**/.*'],
    appDirectory: 'app',
    assetsBuildDirectory: './public/build',
    serverBuildPath: 'build/index.js',
    serverBuildTarget: 'node-cjs',
    publicPath: '/',
    serverDependenciesToBundle: ['@remix-run/express'],
};
