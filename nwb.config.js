module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ReactTwig',
    jsNext: true,
    umd: true
  }
};
