param(
  [string]$Message = ''
)

$ErrorActionPreference = 'Stop'
Set-Location (Split-Path -Parent $PSScriptRoot)

if (-not (Test-Path '.git')) {
  throw 'This folder is not a Git repository.'
}

if (-not $Message) {
  $Message = Read-Host 'Commit message'
}

if (-not $Message.Trim()) {
  throw 'A commit message is required.'
}

if (git diff --name-only -- .env.local | Select-String '.') {
  Write-Warning '.env.local changes are excluded from the commit.'
}

git add --all
git reset -- .env.local

$stagedFiles = git diff --cached --name-only
if (-not $stagedFiles) {
  Write-Host 'No changes to commit.'
  exit 0
}

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host 'No changes to commit.'
  exit 0
}

git commit -m $Message -m 'Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>'
$branch = git branch --show-current
if (-not $branch) {
  throw 'Could not determine the current Git branch.'
}

git push --set-upstream origin $branch
