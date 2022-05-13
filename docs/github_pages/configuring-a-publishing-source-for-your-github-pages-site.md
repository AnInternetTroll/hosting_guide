---
title: Configuring a publishing source for your GitHub Pages site
sidebar_label: Configure publishing source
sidebar_position: 3
---

For more information about publishing sources, see ["About GitHub Pages."](https://docs.github.comhttps://docs.github.com/articles/about-github-pages#publishing-sources-for-github-pages-sites).

## Choosing a publishing source

Before you configure a publishing source, make sure the branch you want to use as your publishing source already exists in your repository.

1. On GitHub, navigate to your site's repository.
2. Under your repository name, click Settings.

![Repository actions settings](https://docs.github.com/assets/cb-21851/images/help/repository/repo-actions-settings.png)

3. In the "Code and automation" section of the sidebar, click Pages.

![Publishing source drop down](https://docs.github.com/assets/cb-70869/images/help/pages/publishing-source-drop-down.png)

4. Under "GitHub Pages", use the **None** or **Branch** drop-down menu and select a publishing source.

![Drop-down menu to select a publishing source](https://docs.github.com/assets/images/help/pages/publishing-source-drop-down.png)

5. Optionally, use the drop-down menu to select a folder for your publishing source.

![Drop-down menu to select a folder for publishing source](https://docs.github.com/assets/images/help/pages/publishing-source-folder-drop-down.png)

6. Click **Save**.

![Button to save changes to publishing source settings](https://docs.github.com/assets/images/help/pages/publishing-source-save.png)

## Troubleshooting publishing problems with your GitHub Pages site

> Note: If your site has not published automatically, make sure someone with admin permissions and a verified email address has pushed to the publishing source.

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. For more information, see ["Troubleshooting Jekyll build errors for GitHub Pages sites."](https://docs.github.com/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)

Your GitHub Pages site will always be deployed with a Github Actions workflow run, even if you've configured your GitHub Pages site to be built using a different CI tool. Most external CI workflows "deploy" to GitHub Pages by committing the build output to the `gh-pages` branch of the repository, and typically include a `.nojekyll` file. When this happens, the Github Actions workflow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to GitHub Pages servers.

To find potential errors with either the build or deployment, you can check the workflow run for your GitHub Pages site by reviewing your repository's workflow runs. For more information, see ["Viewing workflow run history".](https://docs.github.com/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) For more information about how to re-run the workflow in case of an error, see ["Re-running workflows and jobs".](https://docs.github.com/actions/managing-workflow-runs/re-running-workflows-and-jobs)

> Note: GitHub Actions workflow runs for your GitHub Pages sites are in public beta for public repositories and subject to change. GitHub Actions workflow runs are free for public repositories.
