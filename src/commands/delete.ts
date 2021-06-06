import { Command, flags } from '@oclif/command'
import { readTemplate, writeTemplate } from '../utils'

export default class Delete extends Command {
  static description = 'delete a project template'

  static flags: flags.Input<any> = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'template-name', required: true }]

  async run() {
    const {
      args: { 'template-name': templateName },
    } = this.parse(Delete)

    const templateConfig = readTemplate()

    if (!templateConfig?.[templateName]) {
      this.log(`template name ${templateName} does not exists.`)
      return
    }

    delete templateConfig[templateName]

    writeTemplate(templateConfig)

    this.log(`🎉  Successfully delete project template ${templateName}.`)
  }
}
