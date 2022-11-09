# Semantic Release and Github Actions Demo

This is demo project showing how you can use both
[`semantic-release`](https://github.com/semantic-release/semantic-release) and
[Github Actions](https://docs.github.com/en/actions) to package and release a
new version of your product. In this instance we are packaging a very simple
`zip` file with a single `txt` file inside but hopefully you get the idea.

## Contents

A brief overview of the files in the repo and what they do:

- `mod.ts` This is our very simple TypeScript file which we will use Deno to
  run. This could be anything really as it's not tied to the release and package
  process at all. It was just an easy way to test a file without all the build
  ceremony.
- `VERSION` This is only used for the purpose of this demo to show how we can
  use the `release-bot` to commit any files that have changed as part of the
  release process.
- `.gitIgnore` standard file to ignore things you don't want to commit. Note
  this can also include files you may create in CI but also don't want to
  commit.

Now to the important files that really do all the work:

- `bin/build_release` This script will build the package and alter any files
  during CI. All these changes have been kept as simple as possible in order to
  just demonstrate what is possible.
- `.releaserc` This is the config file that
  [`semantic-release`](https://github.com/semantic-release/semantic-release)
  uses.
- `.github/workflows/tests.yml` This is the Github action file that runs our
  tests. This file will change depending on what technology you uses and how you
  run your tests.
- `.github/workflows/package.yml` This is the Github action file installs
  `semantic-release` and its dependencies and then run it.

Finally you will need to create a new `secret` ENV in order to allow enough permission for GH to generate a new commit into your project if required. You do this by visiting https://github.com/settings/tokens and generating a new `access token` with everything in the `repo` scope ticked. Once you have created the token, don't hide it as you will need to use it in a new secret in your repo. For example for this demo project: https://github.com/whomwah/demo-semantic-release-gh-actions/settings/secrets/actions. The new secret needs to be called `GH_AUTH_TOKEN` and should contain the value of the token you generated above.

Once you have pushed all this to a new repo, you can test it by updating a file and creating a new commit using the correct commit message format as described https://github.com/semantic-release/semantic-release#commit-message-format. For example:

`git commit -m "feat: I've just added a new feature"`

This will then trigger the CI to create a new release. See https://github.com/whomwah/demo-semantic-release-gh-actions/releases for an example of this.
