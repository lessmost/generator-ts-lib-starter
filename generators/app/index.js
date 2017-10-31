const Generator = require('yeoman-generator');
const chalk = require('chalk');
const fs = require('fs');

const FILES = [
  'README',
  'package.json',
  'tsconfig.json',
  'index.html',
  '.gitignore',
  'src/index.ts',
  'src/math.ts',
  'src/math.spec.ts',
];

module.exports = class extends Generator {
  info() {
    console.log(chalk.green('Generator TypeScript library starter'));
  }

  writing() {
    console.log(chalk.green('Generate templates...'));
    FILES.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file));
    });
  }

  install() {
    console.log(chalk.green('Install dependencies...'));
    this.installDependencies({
      bower: false,
    });
  }

  end() {
    console.log(chalk.green('Your library has been generated!'));
  }
};
