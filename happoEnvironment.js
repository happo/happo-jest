const JSDOMEnvironment = require('jest-environment-jsdom');

class HappoEnvironment extends JSDOMEnvironment {
  constructor(config, context) {
    super(config, context);
    console.log(context);

    this.testPath = context.testPath;
  }

  async setup() {
    await super.setup();
    this.global.happoRegister = ({ html, cssBlocks }) => {
      console.log({html, cssBlocks});
    };
  }

  async teardown() {
    console.log('Tearing down', this.testPath);
    await super.teardown();
  }
}

module.exports = HappoEnvironment;
