---
title: Adding a theme to your GitHub Pages site with the theme chooser
sidebar_label: Add theme to a Pages site
sidebar_position: 2
---

People with admin permissions for a repository can use the theme chooser to add a theme to a GitHub Pages site.

## About the theme chooser

The theme chooser adds a Jekyll theme to your repository. For more information about Jekyll, see ["About GitHub Pages and Jekyll".](https://docs.github.com/articles/about-github-pages-and-jekyll)

How the theme chooser works depends on whether your repository is public or private.

- If GitHub Pages is already enabled for your repository, the theme chooser will add your theme to the current publishing source.
- If your repository is public and GitHub Pages is disabled for your repository, using the theme chooser will enable GitHub Pages and configure the default branch as your publishing source.
- If your repository is private and GitHub Pages is disabled for your repository, you must enable GitHub Pages by configuring a publishing source before you can use the theme chooser.

For more information about publishing sources, see ["About GitHub Pages".](https://docs.github.com/articles/about-github-pages#publishing-sources-for-github-pages-sites)

If you manually added a Jekyll theme to your repository in the past, those files may be applied even after you use the theme chooser. To avoid conflicts, remove all manually added theme folders and files before using the theme chooser. For more information, see ["Adding a theme to your GitHub Pages site using Jekyll".](https://docs.github.com/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)

## Adding a theme with the theme chooser

1. On GitHub, navigate to your site's repository.
2. Under your repository name, click Settings.

![Repository actions settings](https://docs.github.com/assets/cb-21851/images/help/repository/repo-actions-settings.png)

3. In the "Code and automation" section of the sidebar, click Pages.

![Publishing source drop down](https://docs.github.com/assets/cb-70869/images/help/pages/publishing-source-drop-down.png)

4. Under "GitHub Pages," click **Choose a theme** or **Change theme**.

![Choose a theme button](https://docs.github.com/assets/images/help/pages/choose-a-theme.png)

5. On the top of the page, click the theme you want, then click **Select theme**.

![Theme options and Select theme button](https://docs.github.com/assets/images/help/pages/select-theme.png)

6. You may be prompted to edit your site's _README.md_ file.

- To edit the file later, click **Cancel**.

![Cancel link when editing a file](https://docs.github.com/assets/images/help/pages/cancel-edit.png)

- To edit the file now, see ["Editing files".](https://docs.github.com/repositories/working-with-files/managing-files/editing-files)

Your chosen theme will automatically apply to markdown files in your repository. To apply your theme to HTML files in your repository, you need to add YAML front matter that specifies a layout to each file. For more information, see "[Front Matter](https://jekyllrb.com/docs/front-matter/)" on the Jekyll site.

## Further reading

- [Themes](https://jekyllrb.com/docs/themes/) on the Jekyll site
