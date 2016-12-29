declare namespace nodegit {
    function Clone(url: string, name: string): Promise<GitRepository>

    interface GitRepository {
        getBranchCommit(branchName: string): RepositoryCommit;
    }

    interface RepositoryCommit {
        message(): string;
    }
}

declare module "nodegit" {
    export = nodegit;
}
