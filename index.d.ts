declare namespace nodegit {
    function Clone(url: string, name: string): Promise<GitRepository>;

    interface GitRepository {
        getBranchCommit(branchName: string): Promise<RepositoryCommit>;
    }

    interface RepositoryCommit {
        message(): string;
    }
}

declare module "nodegit" {
    export = nodegit;
}
