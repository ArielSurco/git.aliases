### git-push-current-branch ###
function push_current_branch() {
  git push origin $(current_branch)
}

# Push current branch
alias pushc="push_current_branch"