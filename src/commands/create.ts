import { Command, flags } from '@oclif/command'
import { clone, install, readTemplate } from '../utils'
import chalk from 'chalk'

export default class Create extends Command {
  static description = 'create a new project from a template'

  static flags: flags.Input<any> = {
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

    const templateConfig = readTemplate()

    if (!templateConfig?.[templateName]) {
      this.log(`template name ${templateName} does not exists.`)
      return
    }

    const { repo } = templateConfig[templateName]

    if (clone(repo, appName)) {
      install(appName)
      this.log(`Ready to go! Run cd ${appName} & yarn start`)
    } else {
      this.error('clone error')
    }
  }
}
