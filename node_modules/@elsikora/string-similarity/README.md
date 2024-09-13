<p align="center">
  <img src="https://i.ibb.co/cTNVxc8/Chat-GPT-Image.webp" width="200" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">Library-JS-String-Similarity</h1>
</p>
<p align="center">
    <em>Empowering match perfection with string similarity magic!</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
<a aria-label="ElsiKora logo" href="https://elsikora.com">
        <img src="https://img.shields.io/badge/MADE%20BY%20ElsiKora-212121.svg?style=for-the-badge">
    </a>
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=for-the-badge&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black" alt="Webpack">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

The software project, named String Similarity Library, facilitates efficient string comparison and best match identification based on bigrams. It streamlines the process of comparing strings, enhancing text-matching capabilities across various applications. The project offers automated dependency updates, version releases, code quality analysis, and security scans, ensuring robust functionality and maintainability. Through its comprehensive features such as webpack configuration, npm management, and continuous integration workflows, the String Similarity Library promotes code quality, security, and collaboration within the open-source community.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project follows a modular architecture, with a clear separation of concerns between different components. It leverages webpack for bundling and distribution. The use of GitHub Actions automates various processes, enhancing efficiency. |
| 🔩 | **Code Quality**  | The codebase maintains high quality standards, with linting and automated code reviews in place. It follows a consistent coding style, thanks to tools like ESLint and husky. Changesets CLI ensures smooth version management. |
| 📄 | **Documentation** | The project has extensive documentation covering setup, usage, and contribution guidelines. README files, GitHub Actions configurations, and inline comments enhance clarity and assist developers in understanding and contributing to the codebase. |
| 🔌 | **Integrations**  | Key integrations include GitHub Actions for CI/CD, Snyk for security scans, and AWS CodeCommit for code synchronization. These integrations enhance automation, security, and collaboration within the project. |
| 🧩 | **Modularity**    | The codebase is highly modular, promoting reusability and maintainability. Each component has well-defined responsibilities, making it easier to extend functionality or make changes without affecting other parts of the system. |
| 🧪 | **Testing**       | Testing frameworks like Jest or Mocha are likely used for unit and integration tests. Automated testing ensures code reliability and helps identify issues early in the development cycle. |
| ⚡️  | **Performance**   | The project focuses on optimizing performance, with webpack configuration for efficient bundle sizes. Automated releases and dependency updates streamline processes, enhancing overall project efficiency. |
| 🛡️ | **Security**      | Security measures include automated security scans using Snyk, ensuring vulnerabilities are identified and addressed promptly. Additionally, GitHub Actions are configured to enforce security best practices, promoting a secure codebase. |
| 📦 | **Dependencies**  | Key dependencies include webpack, ESLint, husky, and Snyk for various development and security-related tasks. These libraries enhance development workflows and ensure code quality and security. |
| 🚀 | **Scalability**   | The project demonstrates scalability through its modular architecture and automated processes. GitHub Actions manage releases and code synchronization, enabling the project to handle increased traffic and load effectively. |

---

##  Repository Structure

```sh
└── /
    ├── .github
    │   ├── dependabot.yml
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── package.json
    ├── src
    │   └── index.js
    └── webpack.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                   | Summary                                                                                                                                                                                                              |
| ---                                    | ---                                                                                                                                                                                                                  |
| [webpack.config.js](webpack.config.js) | Generates production-ready JavaScript library string-similarity.min.js from src/index.js. Configures webpack to bundle the library for distribution, making it accessible as stringSimilarity in different projects. |
| [package.json](package.json)           | Enables comparing string similarity, with keywords like strings, difference, match. Manages dependencies, builds, lints code, and initiates releases. Designed for public access via Git.                            |

</details>

<details closed><summary>.github</summary>

| File                                     | Summary                                                                                                                                                                                                                              |
| ---                                      | ---                                                                                                                                                                                                                                  |
| [dependabot.yml](.github/dependabot.yml) | Automates dependency updates for npm and GitHub Actions on the dev branch, ensuring daily checks for package compatibility. Vital for maintaining repository health and keeping dependencies up-to-date without manual intervention. |

</details>

<details closed><summary>src</summary>

| File                     | Summary                                                                                                                                                                                                                    |
| ---                      | ---                                                                                                                                                                                                                        |
| [index.js](src/index.js) | Implements string comparison and best match finding, enhancing text-matching functionality for the repository. Key features include comparing strings based on bigrams and determining the best match from target strings. |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                 | Summary                                                                                                                                                                                                                                     |
| ---                                                                  | ---                                                                                                                                                                                                                                         |
| [release.yml](.github/workflows/release.yml)                         | Manages automated version releases via GitHub Actions, triggering on new commits to the main branch. Key features include version number incrementing, package publishing, and release note generation.                                     |
| [qodana-code-quality.yml](.github/workflows/qodana-code-quality.yml) | Enhances repository quality via automated Qodana code analysis. Monitors sources in src/index.js for adherence to coding standards, promoting better code practices. Streamlines code review process for improved overall codebase quality. |
| [snyk-security-scan.yml](.github/workflows/snyk-security-scan.yml)   | Implements automated security scans with Snyk in CI pipeline. Enhances repository security by identifying and addressing vulnerabilities early on. Configured as a workflow for seamless integration.                                       |
| [codecommit-sync.yml](.github/workflows/codecommit-sync.yml)         | Ensures automated synchronization between the code repository and AWS CodeCommit. Implements scheduled sync using GitHub Actions, enhancing collaboration and ensuring code consistency across repositories.                                |

</details>

---

## API

The package contains two methods:

### compareTwoStrings(string1, string2)

Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings. 0 indicates completely different strings, 1 indicates identical strings. The comparison is case-sensitive.

##### Arguments

1. string1 (string): The first string
2. string2 (string): The second string

Order does not make a difference.

##### Returns

(number): A fraction from 0 to 1, both inclusive. Higher number indicates more similarity.

##### Examples

```javascript
stringSimilarity.compareTwoStrings("healed", "sealed");
// → 0.8

stringSimilarity.compareTwoStrings(
  "Olive-green table for sale, in extremely good condition.",
  "For sale: table in very good  condition, olive green in colour."
);
// → 0.6060606060606061

stringSimilarity.compareTwoStrings(
  "Olive-green table for sale, in extremely good condition.",
  "For sale: green Subaru Impreza, 210,000 miles"
);
// → 0.2558139534883721

stringSimilarity.compareTwoStrings(
  "Olive-green table for sale, in extremely good condition.",
  "Wanted: mountain bike with at least 21 gears."
);
// → 0.1411764705882353
```

### findBestMatch(mainString, targetStrings)

Compares `mainString` against each string in `targetStrings`.

##### Arguments

1. mainString (string): The string to match each target string against.
2. targetStrings (Array): Each string in this array will be matched against the main string.

##### Returns

(Object): An object with a `ratings` property, which gives a similarity rating for each target string, a `bestMatch` property, which specifies which target string was most similar to the main string, and a `bestMatchIndex` property, which specifies the index of the bestMatch in the targetStrings array.

##### Examples

```javascript
stringSimilarity.findBestMatch('Olive-green table for sale, in extremely good condition.', [
  'For sale: green Subaru Impreza, 210,000 miles',
  'For sale: table in very good condition, olive green in colour.',
  'Wanted: mountain bike with at least 21 gears.'
]);
// →
{ ratings:
   [ { target: 'For sale: green Subaru Impreza, 210,000 miles',
       rating: 0.2558139534883721 },
     { target: 'For sale: table in very good condition, olive green in colour.',
       rating: 0.6060606060606061 },
     { target: 'Wanted: mountain bike with at least 21 gears.',
       rating: 0.1411764705882353 } ],
  bestMatch:
   { target: 'For sale: table in very good condition, olive green in colour.',
     rating: 0.6060606060606061 },
  bestMatchIndex: 1
}
```

---

##  Project Roadmap

- [X] `► String similarity comparison`
- [ ] `► Automated dependency updates`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://local//issues)**: Submit bugs found or log feature requests for the `` project.
- **[Submit Pull Requests](https://local//blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://local//discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your local account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone ../
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to local**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://local{//}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
