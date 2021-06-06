import * as fs from 'fs'
import * as path from 'path'
import { spawnSync, execSync } from 'child_process'

/**
 * format
 * https => https://github.com/NuoHui/node_code_constructor.git
 * ssh => git@github.com:NuoHui/node_code_constructor.git
 * want => github:NuoHui/node_code_constructor
 * @param {string} gitRepo git repo address
 * @returns {string} real git repo address
 */
export const getRealGitRepo = (gitRepo: string) => {
  const sshRegExp = /^git@[a-z]+.com:(.+)\/(.+).git$/
  const httpsRegExp = /^https:\/\/[a-z]+.com\/(.+)\/(.+).git$/

  if (sshRegExp.test(gitRepo)) {
    const match = gitRepo.match(sshRegExp)
    if (!match?.length) {
      return ''
    }
    return `github:${match[1]}/${match[2]}`
  }

  if (httpsRegExp.test(gitRepo)) {
    const match = gitRepo.match(httpsRegExp)
    if (!match?.length) {
      return ''
    }
    return `github:${match[1]}/${match[2]}`
  }

  return ''
}

const configPath = path.join(__dirname, '../../config/template.json')

export const writeTemplate = (data: object) => fs.writeFileSync(configPath, JSON.stringify(data), 'utf8')

export const readTemplate = () => {
  try {
    return JSON.parse(fs.readFileSync(configPath).toString())
  } catch (error) {
    throw error
  }
}

export const run = (cmd: string, args: ReadonlyArray<string>) => spawnSync(cmd, args, { stdio: 'inherit' })

export const clone = (repo: string, dest: string) => {
  const cmd = run('git', ['clone', '--depth=1', repo, dest])

  if (cmd.status === 0) {
    run('rm', ['-rf', `${dest}/.git`])
    return true
  }
  return false
}

export const exists = (path: string) => fs.existsSync(path)

export const shouldUseYarn = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (error) {
    return false
  }
}

export const install = (appName: string) => {
  const useYarn = shouldUseYarn()

  const root = path.resolve(appName)

  if (!exists(`${root}/package.json`)) {
    return
  }

  if (useYarn) {
    run('yarn', ['install', '--cwd', root])
  } else {
    run('npm', ['install', '--prefix', root])
  }
}
