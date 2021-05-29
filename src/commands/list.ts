import { Command, flags } from '@oclif/command'
import { readTemplate } from '../utils'

export default class List extends Command {
  static description = 'list all available project template'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const templateConfig = readTemplate()

    this.log(`<template-name>: <git-repo-addres>`)
    Object.keys(templateConfig).forEach(name => {
      this.log(`${name}: ${templateConfig[name].github}`)
    })
  }
}
