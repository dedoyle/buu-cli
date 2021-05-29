import { Command, flags } from '@oclif/command'
import { getRealGitRepo, readTemplate, writeTemplate } from '../utils'
import isGitUrl from 'is-git-url'

export default class Add extends Command {
  static description = 'add a project template'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'template-name', required: true },
    { name: 'git-repo-address', required: true },
  ]

  async run() {
    const {
      args: { 'template-name': templateName, 'git-repo-address': gitRepoAddress },
    } = this.parse(Add)

    const templateConfig = readTemplate()

    if (templateConfig[templateName]) {
      this.warn(`template name ${templateName} has exists.`)
      return
    }

    if (!isGitUrl(gitRepoAddress)) {
      this.error(`git repo address ${gitRepoAddress} is not a correct git repo.`)
      return
    }

    const realRepo = getRealGitRepo(gitRepoAddress)
    if (!realRepo) {
      this.error(`git repo address ${gitRepoAddress} is not a correct git repo.`)
      return
    }

    const newTemplateConfig = {
      ...templateConfig,
      [templateName]: {
        github: gitRepoAddress,
        download: realRepo,
      },
    }

    writeTemplate(newTemplateConfig)

    this.log(`🎉  Successfully add project template ${templateName}.`)
  }
}
