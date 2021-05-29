import { Command, flags } from '@oclif/command'

export default class Create extends Command {
  static description = 'create a new project from a template'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'template-name', required: true },
    { name: 'app-name', required: true },
  ]

  async run() {
    const {
      args: { 'template-name': templateName, 'app-name': appName },
    } = this.parse(Create)

    this.log(templateName, appName)
  }
}
