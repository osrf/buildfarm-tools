# How to contribute to this project?

Thank you for considering contributing to our open-source project! We welcome contributions from the community to help improve and grow our project. To ensure a smooth collaboration, please review and follow these guidelines.

## Getting Started

To set up the project locally, please follow the instructions below:

1. Fork the repository and clone it to your local machine.
    ```bash
    git clone https://github.com/osrf/buildfarm-tools.git
    ```
2. Install the dependencies of the project:
    * [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/)
    
    ```bash
    pip install -r requirements.txt
    ```
3. Test the scripts
    * You can test your installation by running:
        ```bash
        cd database/scripts
        ./check_buildfarm.rb
        ```
    * Wait for the script to run (around 1 minute) and check the buildfarm issues that are happening in the buildfarms
4. Read [Buildfarmer Playbook](./playbook/buildfarmer/README.md) and get started in all our scripts!


## Contributing guidelines

In order to contribute to this project, check the following statements:

* *Bug Report*: You can open issues for any bug you find using these tools.
* *Bug Fixes*: For any opened bug or new bug that you find, feel free to open a PR to fix it!
* *Improvements*: If you find any existing script that you feel it can be improved, feel free to open a PR, write your thoughts and make your changes.
* *Feature Proposal*: We will only accept new features if it fits in our current daily workflow (check [buildfaremr day](./playbook/buildfarmer/scripted_buildfarm_day.md)). This is due to the fact that creating new scripts implies the team has to maintain them. 
