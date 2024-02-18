export interface Command {
  // Unique identifier for the command, matches with the command file name
  id: string
  name: string
  description: string
  alias: string
  dependencies: string[]
}

export const commands: Command[] = [
  {
    id: 'git-status',
    name: 'git status',
    description: 'Show the working tree status',
    alias: 'st',
    dependencies: [],
  },
  {
    id: 'git-commit',
    name: 'git commit -m',
    description: 'Record changes to the repository',
    alias: 'cm',
    dependencies: [],
  },
  {
    id: 'git-amend',
    name: 'git commit --amend',
    description: 'Amend the last commit',
    alias: 'amend',
    dependencies: [],
  },
  {
    id: 'git-pull',
    name: 'git pull',
    description:
      'Fetch branches and/or tags from the repository and merge them into local branches',
    alias: 'pull',
    dependencies: [],
  },
  {
    id: 'git-pull-current-branch',
    name: 'git pull origin {currentBranch}',
    description: 'Fetch branch and merge it into the current branch',
    alias: 'pullc',
    dependencies: ['current-branch'],
  },
  {
    id: 'git-push',
    name: 'git push',
    description: 'Update remote refs along with associated objects',
    alias: 'ps',
    dependencies: [],
  },
  {
    id: 'git-push-current-branch',
    name: 'git push origin {currentBranch}',
    description: 'Update remote branch with the local current branch',
    alias: 'psc',
    dependencies: ['current-branch'],
  },
  {
    id: 'git-log',
    name: 'git log',
    description: 'Show commit logs',
    alias: 'log',
    dependencies: [],
  },
  {
    id: 'git-decorated-log',
    name: 'git log --oneline --decorate --graph --all',
    description: 'Show commit logs graph',
    alias: 'dlog',
    dependencies: [],
  },
  {
    id: 'git-unstage',
    name: 'git restore --staged',
    description: 'Discard changes in the staging area',
    alias: 'unstage',
    dependencies: [],
  },
  {
    id: 'git-restore',
    name: 'git restore',
    description: 'Discard changes in working directory',
    alias: 'restore',
    dependencies: [],
  },
  {
    id: 'git-switch',
    name: 'git switch',
    description: 'Switch branches',
    alias: 'sw',
    dependencies: [],
  },
  {
    id: 'git-diff',
    name: 'git diff',
    description: 'Show changes between commits, commit and working tree, etc',
    alias: 'df',
    dependencies: [],
  },
  {
    id: 'git-merge',
    name: 'git merge',
    description: 'Merge branches',
    alias: 'mg',
    dependencies: [],
  },
  {
    id: 'git-rebase',
    name: 'git rebase',
    description: 'Reapply commits on top of another base tip',
    alias: 'rebase',
    dependencies: [],
  },
  {
    id: 'git-add',
    name: 'git add',
    description: 'Add files to the staging area',
    alias: 'add',
    dependencies: [],
  },
]
