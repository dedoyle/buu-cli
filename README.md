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
* [`buu hello [FILE]`](#buu-hello-file)
* [`buu help [COMMAND]`](#buu-help-command)

## `buu hello [FILE]`

describe the command here

```
USAGE
  $ buu hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ buu hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dedoyle/buu-cli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
