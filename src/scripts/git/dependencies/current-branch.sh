### current-branch ###
function current_branch() {
  git rev-parse --abbrev-ref HEAD
}