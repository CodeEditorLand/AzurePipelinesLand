export const acquireAccessTokenFailed: string =
	"Acquiring access token failed. Error: %s.";
export const addYmlFile: string = "Add Azure Pipelines YAML definition.";
export const analyzingRepo: string = "Analyzing your repo";
export const azureAccountExtensionUnavailable: string =
	"Azure Account extension could not be fetched. Please ensure it's installed and activated.";
export const gitExtensionUnavailable: string =
	"Git extension could not be fetched. Please ensure it's installed and activated.";
export const gitExtensionNotEnabled: string =
	"Git extension is not enabled. Please change the `git.enabled` setting to true.";
export const azureLoginRequired: string =
	"Please sign in to your Azure account first.";
export const branchHeadMissing: string = `The current repository doesn't have any commits. Please [create a commit](https://git-scm.com/docs/git-commit) first, and then try this again.`;
export const branchNameMissing: string = `The current repository isn't on a branch. Please [checkout a branch](https://git-scm.com/docs/git-checkout) first, and then try this again.`;
export const branchRemoteMissing: string = `The current branch doesn't have a tracking branch, and the selected repository has no remotes. We're unable to create a remote tracking branch. Please [set a remote tracking branch](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---track) first, and then try this again.`;
export const browsePipeline: string = "Browse Pipeline";
export const cannotIdentifyRepositoryDetails: string =
	"Couldn't get repository details. Ensure your repo is hosted on [Azure Repos](https://docs.microsoft.com/azure/devops/repos/get-started) or [GitHub](https://guides.github.com/activities/hello-world/).";
export const commitAndPush: string = "Commit & push";
export const commitFailedErrorMessage: string = `Commit failed due to error: %s`;
export const pushingPipelineFile: string = "Pushing pipeline file...";
export const configuringPipelineAndDeployment: string =
	"Configuring pipeline and proceeding to deployment...";
export const runningPostDeploymentActions: string =
	"Running post-deployment actions...";
export const couldNotAuthorizeEndpoint: string =
	"Couldn't authorize endpoint for use in Azure Pipelines.";
export const creatingAzureServiceConnection: string =
	"Connecting Azure Pipelines with your subscription: %s";
export const creatingGitHubServiceConnection: string =
	"Creating GitHub service connection";
export const discardPipeline: string = "Discard pipeline";
export const enterGitHubPat: string =
	"Enter GitHub personal access token (PAT)";
export const failedToDetermineAzureRepoDetails: string =
	"Failed to determine Azure Repo details from remote url. Please ensure that the remote points to a valid Azure Repos url.";
export const gitHubPatErrorMessage: string = "GitHub PAT cannot be empty.";
export const githubPatHelpMessage: string =
	"GitHub personal access token (PAT) with following permissions: full access to repository webhooks and services, read and write access to all repository data.";
export const modifyAndCommitFile: string =
	"Modify and save your YAML file. %s will commit this file, push the branch '%s' to remote '%s' and proceed with deployment.";
export const noAgentQueueFound: string = 'No agent pool found named "%s".';
export const noAvailableFileNames: string = "No available filenames found.";
export const notAGitRepository: string =
	"Selected workspace is not a [Git](https://git-scm.com/docs/git) repository. Please select a Git repository.";
export const notAzureRepoUrl: string =
	"The repo isn't hosted with Azure Repos.";
export const pipelineSetupSuccessfully: string =
	"Pipeline set up successfully!";
export const remoteRepositoryNotConfigured: string =
	"Remote repository is not configured. This extension is compatible with [Azure Repos](https://docs.microsoft.com/en-us/azure/devops/repos/get-started) or [GitHub](https://guides.github.com/activities/hello-world/).";
export const selectFolderLabel: string =
	"Select source folder for configuring pipeline";
export const selectOrganizationForEnhancedIntelliSense: string =
	"Select Azure DevOps organization associated with the %s repository for enhanced Azure Pipelines IntelliSense.";
export const selectOrganizationLabel: string = "Select organization";
export const selectOrganizationPlaceholder: string =
	"Select Azure DevOps organization associated with the %s repository";
export const selectPipelineTemplate: string =
	"Select an Azure Pipelines template...";
export const selectProject: string = "Select an Azure DevOps project";
export const selectRemoteForBranch: string =
	"Select the remote repository where you want to track your current branch";
export const selectSubscription: string = "Select an Azure subscription";
export const selectWorkspaceFolder: string =
	"Select a folder from your workspace to deploy";
export const signInLabel: string = "Sign In";
export const unableToAccessOrganization: string =
	'Unable to access the "%s" organization. Make sure you\'re signed into the right Azure account.';
export const unableToCreateServiceConnection: string = `Unable to create %s service connection.\nOperation Status: %s\nMessage: %s\nService connection is not in ready state.`;
export const timedOutCreatingServiceConnection: string = `Timed out creating %s service connection.\nService connection is not in ready state.`;
export const retryFailedMessage: string = `Failed after retrying: %s times. Internal Error: %s`;
export const azureServicePrincipalFailedMessage: string = `Failed while creating Azure service principal.`;
export const roleAssignmentFailedMessage: string = `Failed while role assignement.`;
export const waitForAzureSignIn: string = `Waiting for Azure sign-in...`;
export const signInForEnhancedIntelliSense =
	"Sign in to Azure for enhanced Azure Pipelines IntelliSense";
export const userEligibleForEnahanced1ESPTIntellisense =
	"Enable 1ESPT Schema in Azure Pipelines Extension settings for enhanced Intellisense";
export const notUsing1ESPTSchemaAsUserNotSignedInMessage =
	"1ESPT Schema is not used for Intellisense as you are not signed in with a `@microsoft.com` account";
export const enable1ESPTSchema = "Enable";
export const doNotAskAgain = "Don't Ask Again";
