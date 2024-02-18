### git-pull-current-branch ###

function pull_current_branch() {
  git pull origin $(current_branch)
}

# Pull current branch
alias pullc="pull_current_branch"