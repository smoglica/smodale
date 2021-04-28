module.exports = ({ env }) => {
  if (!env('test')) {
    return {};
  }

  return {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  };
};
