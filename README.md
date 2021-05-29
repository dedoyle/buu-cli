buu-cli
=======

A node cli for frontend

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/buu-cli.svg)](https://npmjs.org/package/buu-cli)
[![Downloads/week](https://img.shields.io/npm/dw/buu-cli.svg)](https://npmjs.org/package/buu-cli)
[![License](https://img.shields.io/npm/l/buu-cli.svg)](https://github.com/dedoyle/buu-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g buu-cli
$ buu COMMAND
running command...
$ buu (-v|--version|version)
buu-cli/0.0.0 win32-x64 node-v14.16.1
$ buu --help [COMMAND]
USAGE
  $ buu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`buu add TEMPLATE-NAME GIT-REPO-ADDRESS`](#buu-add-template-name-git-repo-address)
* [`buu create [FILE]`](#buu-create-file)
* [`buu delete [FILE]`](#buu-delete-file)
* [`buu help [COMMAND]`](#buu-help-command)
* [`buu list`](#buu-list)

## `buu add TEMPLATE-NAME GIT-REPO-ADDRESS`

describe the command here

```
USAGE
  $ buu add TEMPLATE-NAME GIT-REPO-ADDRESS

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/dedoyle/buu-cli/blob/v0.0.0/src/commands/add.ts)_

## `buu create [FILE]`

describe the command here

```
USAGE
  $ buu create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/dedoyle/buu-cli/blob/v0.0.0/src/commands/create.ts)_

## `buu delete [FILE]`

describe the command here

```
USAGE
  $ buu delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/dedoyle/buu-cli/blob/v0.0.0/src/commands/delete.ts)_

## `buu help [COMMAND]`

display help for buu

```
USAGE
  $ buu help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `buu list`

list all available project template

```
USAGE
  $ buu list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/dedoyle/buu-cli/blob/v0.0.0/src/commands/list.ts)_
<!-- commandsstop -->
