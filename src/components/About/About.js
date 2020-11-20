import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./About.module.css";
import classnames from 'classnames';
import { Octokit } from "@octokit/rest";
import Pagination from '@material-ui/lab/Pagination';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    error: "",
    repoList: [],
    info: [],
    currentPage: 1,
    maxReposInPage: 2
  }

  componentDidMount() {
    this.requestRepolist(this.state.maxReposInPage, this.state.currentPage);

    octokit.users.getByUsername({
      username: "tytytyw"
        }).then(({ data }) => {
          this.setState({
            info: data,
        });
    })
    .catch( (error) => {
      this.setState({
        bioIsLoading: false,
        isError: true,
        error: error.message
      });
    });
  }

  requestRepolist = (maxReposInPage, selectedPage) => {
  octokit.repos.listForUser({
    username: 'tytytyw',
    per_page: maxReposInPage,
    page: selectedPage
  }).then(
    successResponse => {
      this.setState({
        repoList: successResponse.data,
        fetchReposFailure: false,
        isLoading: false,
        currentPage: selectedPage
      }); 
    }).catch(error => {
      this.setState({
        fetchReposFailure: true,
        isLoading: false,
        currentPage: selectedPage
      });
  });
  }

  render() {
    const { isLoading, isError, error, repoList, info, currentPage, maxReposInPage  } = this.state;
    const switchPage = (event, page) => {
      this.requestRepolist(maxReposInPage, page);
    };

    return (
      isLoading ? <CircularProgress /> :
        <div className={styles.wrap}>

          {!isLoading && !isError &&
            <div className={styles.bio}>
              <img src={info.avatar_url} alt="avatar GitHub"></img>
              <h4 className={styles.content}>
                <div>
                  name: {info.name}
                </div>
                <a
                  className={styles.link}
                  href={info.html_url}
                  target="_blank"
                >
                    GitHub: {info.login}
                </a>
              </h4>
            </div>
          }

          {!isLoading && !isError &&
            <div className={styles.title}>
              Мои репозитрии:
              <ol className={styles.repo_list}>
                {repoList.map( (repo) => (
                <li 
                  key={repo.id}
                  className={styles.item}
                >
                  <a
                  target="_blank"
                  className={styles.link}
                  href={repo.html_url}
                  >
                    <span className={styles.repo_lang}>
                      <span className={classnames({
                        [styles.language]: true,
                        [styles.html_language]: repo.language === 'HTML',
                        [styles.css_language]: repo.language === 'CSS',
                        [styles.js_language]: repo.language === 'JavaScript',
                        })}>
                      </span>

                      {repo.language}

                    </span>
                    {repo.name}

                    <span className={styles.update}>
                      {new Date(repo.updated_at).toLocaleString('ru',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      }
                    </span>
                  </a>

                  <a
                    target="_blank"
                    href={`https://${info.login}.github.io/${repo.name}/`}
                    className={styles.repos_descr}
                  >
                    {repo.description}
                  </a> 

                </li>))}
              </ol>
            </div>
          }

          {isError &&
            <div className={styles.error}>
              Ошибка: {error}
            </div>
          }

      <Pagination
        className={styles.pagination}
        onChange={switchPage}
        page={currentPage}
        count={Math.ceil(info.public_repos / maxReposInPage)}
        shape="rounded"
      />
      </div>

    );
  }
}

export default About;
