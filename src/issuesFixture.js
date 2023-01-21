const issues = {
  status: 200,
  url: "https://api.github.com/issues",
  headers: {
    "cache-control": "private, max-age=60, s-maxage=60",
    "content-type": "application/json; charset=utf-8",
    etag: 'W/"2539f682ed273989c9757ae2b6a8eb337ee72bf4273eeb3339340ceb7c003659"',
    "x-accepted-oauth-scopes": "",
    "x-github-media-type": "github.v3; format=json",
    "x-github-request-id": "2498:87B8:1B3B544:3853CE8:63CC0B7A",
    "x-oauth-scopes":
      "admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, codespace, delete:packages, delete_repo, gist, notifications, project, repo, user, workflow, write:discussion, write:packages",
    "x-ratelimit-limit": "5000",
    "x-ratelimit-remaining": "4993",
    "x-ratelimit-reset": "1674319883",
    "x-ratelimit-resource": "core",
    "x-ratelimit-used": "7",
  },
  data: [
    {
      url: "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1",
      repository_url:
        "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs",
      labels_url:
        "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1/labels{/name}",
      comments_url:
        "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1/comments",
      events_url:
        "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1/events",
      html_url:
        "https://github.com/blueberrychopsticks/2023xstate-hack-odevs/issues/1",
      id: 1551837761,
      node_id: "I_kwDOI0QeIc5cfypB",
      number: 1,
      title: "test issue #1",
      user: {
        login: "blueberrychopsticks",
        id: 96441636,
        node_id: "U_kgDOBb-VJA",
        avatar_url: "https://avatars.githubusercontent.com/u/96441636?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/blueberrychopsticks",
        html_url: "https://github.com/blueberrychopsticks",
        followers_url:
          "https://api.github.com/users/blueberrychopsticks/followers",
        following_url:
          "https://api.github.com/users/blueberrychopsticks/following{/other_user}",
        gists_url:
          "https://api.github.com/users/blueberrychopsticks/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/blueberrychopsticks/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/blueberrychopsticks/subscriptions",
        organizations_url:
          "https://api.github.com/users/blueberrychopsticks/orgs",
        repos_url: "https://api.github.com/users/blueberrychopsticks/repos",
        events_url:
          "https://api.github.com/users/blueberrychopsticks/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/blueberrychopsticks/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [],
      state: "open",
      locked: false,
      assignee: {
        login: "blueberrychopsticks",
        id: 96441636,
        node_id: "U_kgDOBb-VJA",
        avatar_url: "https://avatars.githubusercontent.com/u/96441636?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/blueberrychopsticks",
        html_url: "https://github.com/blueberrychopsticks",
        followers_url:
          "https://api.github.com/users/blueberrychopsticks/followers",
        following_url:
          "https://api.github.com/users/blueberrychopsticks/following{/other_user}",
        gists_url:
          "https://api.github.com/users/blueberrychopsticks/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/blueberrychopsticks/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/blueberrychopsticks/subscriptions",
        organizations_url:
          "https://api.github.com/users/blueberrychopsticks/orgs",
        repos_url: "https://api.github.com/users/blueberrychopsticks/repos",
        events_url:
          "https://api.github.com/users/blueberrychopsticks/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/blueberrychopsticks/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "blueberrychopsticks",
          id: 96441636,
          node_id: "U_kgDOBb-VJA",
          avatar_url: "https://avatars.githubusercontent.com/u/96441636?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/blueberrychopsticks",
          html_url: "https://github.com/blueberrychopsticks",
          followers_url:
            "https://api.github.com/users/blueberrychopsticks/followers",
          following_url:
            "https://api.github.com/users/blueberrychopsticks/following{/other_user}",
          gists_url:
            "https://api.github.com/users/blueberrychopsticks/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/blueberrychopsticks/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/blueberrychopsticks/subscriptions",
          organizations_url:
            "https://api.github.com/users/blueberrychopsticks/orgs",
          repos_url: "https://api.github.com/users/blueberrychopsticks/repos",
          events_url:
            "https://api.github.com/users/blueberrychopsticks/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/blueberrychopsticks/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: "2023-01-21T15:54:53Z",
      updated_at: "2023-01-21T15:54:53Z",
      closed_at: null,
      author_association: "OWNER",
      active_lock_reason: null,
      repository: {
        id: 591666721,
        node_id: "R_kgDOI0QeIQ",
        name: "2023xstate-hack-odevs",
        full_name: "blueberrychopsticks/2023xstate-hack-odevs",
        private: false,
        owner: {
          login: "blueberrychopsticks",
          id: 96441636,
          node_id: "U_kgDOBb-VJA",
          avatar_url: "https://avatars.githubusercontent.com/u/96441636?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/blueberrychopsticks",
          html_url: "https://github.com/blueberrychopsticks",
          followers_url:
            "https://api.github.com/users/blueberrychopsticks/followers",
          following_url:
            "https://api.github.com/users/blueberrychopsticks/following{/other_user}",
          gists_url:
            "https://api.github.com/users/blueberrychopsticks/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/blueberrychopsticks/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/blueberrychopsticks/subscriptions",
          organizations_url:
            "https://api.github.com/users/blueberrychopsticks/orgs",
          repos_url: "https://api.github.com/users/blueberrychopsticks/repos",
          events_url:
            "https://api.github.com/users/blueberrychopsticks/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/blueberrychopsticks/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/blueberrychopsticks/2023xstate-hack-odevs",
        description:
          "Repository to track our stuff for the 2023 ODevs State Hackathon",
        fork: false,
        url: "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs",
        forks_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/forks",
        keys_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/teams",
        hooks_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/hooks",
        issue_events_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/events",
        assignees_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/tags",
        blobs_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/languages",
        stargazers_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/stargazers",
        contributors_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/contributors",
        subscribers_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/subscribers",
        subscription_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/subscription",
        commits_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/merges",
        archive_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/downloads",
        issues_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/labels{/name}",
        releases_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/deployments",
        created_at: "2023-01-21T13:27:04Z",
        updated_at: "2023-01-21T15:27:04Z",
        pushed_at: "2023-01-21T15:39:20Z",
        git_url:
          "git://github.com/blueberrychopsticks/2023xstate-hack-odevs.git",
        ssh_url: "git@github.com:blueberrychopsticks/2023xstate-hack-odevs.git",
        clone_url:
          "https://github.com/blueberrychopsticks/2023xstate-hack-odevs.git",
        svn_url: "https://github.com/blueberrychopsticks/2023xstate-hack-odevs",
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 1,
        watchers: 0,
        default_branch: "main",
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      body: null,
      reactions: {
        url: "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/blueberrychopsticks/2023xstate-hack-odevs/issues/1/timeline",
      performed_via_github_app: null,
      state_reason: null,
    },
  ],
};
