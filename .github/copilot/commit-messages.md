# Commit Message Instructions for GitHub Copilot

When writing commit messages, please follow the Conventional Commits specification format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

## Scope

The scope should be the name of the affected component or module (e.g., `auth`, `api`, `ui`, etc.)

## Description

The description should be:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize first letter
- No dot (.) at the end
- Limit to 50 characters when possible

## Examples

```
feat(auth): add login functionality
fix(api): handle timeout errors gracefully
docs(readme): update installation instructions
style(components): format according to style guide
refactor(utils): simplify error handling logic
perf(queries): optimize database queries
test(auth): add unit tests for login
build(deps): update dependencies
ci(github): add workflow for automated tests
chore: update .gitignore
```

## Breaking Changes

If the commit includes a breaking change, add a `!` after the type/scope and include a `BREAKING CHANGE:` footer:

```
feat(api)!: change authentication endpoints

BREAKING CHANGE: The authentication endpoints now use JWT tokens instead of session cookies
```
