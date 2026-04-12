# Release Process

Step-by-step checklist for publishing a new version of `@flowmatrix-ai/brand`.

---

## Pre-flight

- [ ] `main` is green in CI
- [ ] All intended changes are merged to `main`
- [ ] No uncommitted local changes (`git status` is clean)

---

## 1. Determine the version bump

Consult [versioning-policy.md](./versioning-policy.md) to decide `MAJOR`, `MINOR`, or `PATCH`.

---

## 2. Update CHANGELOG.md

Move entries from `[Unreleased]` to a new versioned section:

```markdown
## [X.Y.Z] — YYYY-MM-DD
```

Add the comparison URL at the bottom of the file:

```markdown
[X.Y.Z]: https://github.com/FlowMatrix-AI/brand/compare/vA.B.C...vX.Y.Z
```

Update the `[Unreleased]` link:

```markdown
[Unreleased]: https://github.com/FlowMatrix-AI/brand/compare/vX.Y.Z...HEAD
```

---

## 3. Bump the version in package.json

```bash
npm version patch   # or minor / major
```

`npm version` edits `package.json`, commits the change, and creates a local tag.

---

## 4. Run tests + build locally

```bash
npm test
npm run build
```

Verify `dist/` is clean and tests pass against the current source.

---

## 5. Push the commit and tag

```bash
git push origin main --follow-tags
```

CI will run on the push.  Wait for the green check.

---

## 6. Create the GitHub Release

```bash
gh release create vX.Y.Z --title "vX.Y.Z" --notes-file <(cat CHANGELOG.md)
```

Or open the GitHub UI:
1. Go to **Releases → Draft a new release**
2. Tag: `vX.Y.Z` (the tag already exists from step 3)
3. Title: `vX.Y.Z`
4. Body: paste the relevant section from CHANGELOG.md

Publishing the release triggers the `publish.yml` workflow, which builds and publishes
to GitHub Packages.

---

## 7. Verify publication

```bash
npm view @flowmatrix-ai/brand --registry https://npm.pkg.github.com
```

Confirm the new version appears.

---

## 8. Update consumers

Open a Dependabot PR (or manual bump PR) in the website repo to install the new version.
