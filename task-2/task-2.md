## Task-2: Frontend Testing

As it was already mentioned in the first task, the application that will be tested is the following website: https://demowebshop.tricentis.com/.

Besides the mandatory part of the task, I added a few extra things:
1. A structure that could be reused anytime (with a bit of modification) in the future for other applications as well and could be easily scaled.
2. ESLint and Prettier configuration files to make sure that the code follows consistent styling rules (that I already get used to).
3. A few workflow files just with a minimal check, as in the bonus question will require some CI explanation and could be used as a reference.

There are some parts that might seem unnecessary (like the empty "components" folder which is used just as a wrapper for now, or the placeholder tags and annotations without TC and SRS).
And there are things that I could have done differently, but to explain things better I decided to skip. For example adding a husky and do the checks before even allowing to push something wrong:
- A pre-commit hook could run the prettier format and re-add the modified files to commit - not putting it in a lint-staged as it picks up the files that are staged for commit and skip the ones that are modified, not staged, but need formatting or ignores someone's force push.
- And a pre-push hook could run the ESLint - definitely not in a pre-commit, because for example, it could be a nightmare blocking an enormous conflict resolve just because it's not 100% perfectly resolved. And also makes no sense to run it over and over again when you just want to commit quickly.

Start with the readme, to review the task: [README.md](README.md)