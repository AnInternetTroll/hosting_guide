---
title: Creating a custom 404 page for your GitHub Pages site
sidebar_position: 4
sidebar_label: Create custom 404 page
---

1. In the upper-right corner of any page, use the drop-down menu, and select New
   repository.

![Drop-down with option to create a new repository](https://docs.github.com/assets/cb-11427/images/help/repository/repo-create.png)

2. Use the Owner drop-down menu, and select the account you want to own the
   repository.

![Owner drop-down menu](https://docs.github.com/assets/cb-23682/images/help/repository/create-repository-owner.png)

3. Type a name for your repository and an optional description. If you're
   creating a user or organization site, your repository must be named
   user.github.io or organization.github.io. If your user or organization
   name contains uppercase letters, you must lowercase the letters. For more
   information, see ["About GitHub Pages."](https://docs.github.com/en/articles/about-github-pages#publishing-sources-for-github-pages-sites)

![Give a name to the repository](https://docs.github.com/assets/cb-34195/images/help/pages/create-repository-name-pages.png)

4. In the file name field, type `404.html` or `404.md`.

![File name field](https://docs.github.com/assets/images/help/pages/404-file-name.png)

5. If you named your file `404.md`, add the following YAML front matter to the beginning of the file:

```yaml
---
permalink: /404.html
---
```

6. Below the YAML front matter, if present, add the content you want to display on your 404 page.

7. At the bottom of the page, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see ["Creating a commit with multiple co-authors."](https://docs.github.com/en/articles/creating-a-commit-with-multiple-authors)

![Commit message box](https://docs.github.com/assets/cb-9378/images/help/repository/write-commit-message-quick-pull.png)

8. If you have more than one email address associated with your account on GitHub.com, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then username@users.noreply.github.com is the default commit author email address. For more information, see ["Setting your commit email address."](https://docs.github.com/en/articles/setting-your-commit-email-address)

![Choose commit email addresses](https://docs.github.com/assets/cb-8478/images/help/repository/choose-commit-email-address.png)

9. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see ["Creating a new pull request."](https://docs.github.com/en/articles/creating-a-pull-request)

![Commit branch options](https://docs.github.com/assets/cb-32137/images/help/repository/choose-commit-branch.png)

10. Click Propose new file.

![Propose new file button](https://docs.github.com/assets/cb-54553/images/help/repository/new-file-commit-button.png)

## Further reading

- [Front matter](http://jekyllrb.com/docs/frontmatter) in the Jekyll documentation
