const webpackMerge = require('webpack-merge')
const buildValidations = require('./build-utils/build-validations')
const commonConfig = require('./build-utils/webpack.common')

const addons = (addonsArg) => {

  let addons = [...[addonsArg]]
    .filter(Boolean);

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERROR_NO_ENV_FLAG)
  }

  const envConfig = require(`./build-utils/webpack.${env.env}`)

  return webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );
}