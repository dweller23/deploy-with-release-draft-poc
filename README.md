Proof of concept for deployment with release serving as the manual approval trigger

1. deploy-staging workflow triggers on push to the main branch, generates an artifact and creates a set of releases for each of the deployments that needs to be manually approved
2. each of the releases has an artifact right now, however this is unnecessary cost in terms of space, so an external storage for the artifact may be better
3. each of the release creation steps in the deploy-staging workflow returns a URL to the release which should allow quick access to the "manual approval" button (which is the "publish" button in this case)
4. upon publishing the given release, a promote-to-region-prod workflow gets invoked and is responsible for picking up the artifact and deploying code to the given region environment

NOTE: Deploying is just a log right now

NOTE: Certain actions may be swapped out for scripts doing similar things leveraging the Octokit library, to ensure independency from non-versioned actions
