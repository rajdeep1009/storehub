import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const ProfileGitRepos = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div class="profile-github">
      <h2 class="text-primary my-1">
        <i class="fa fa-github p-1"></i>Github Repos
      </h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} class="repo bg-white my-1  p-1">
            <div>
              <h4>
                <a href={repo.git_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </h4>
            </div>

            <div>
              <ul>
                <li class="badge badge-primary p-1">
                  Stars: {repo.stargazers_count}
                </li>
                <li class="badge badge-dark p-1">Watchers: {repo.watchers}</li>
                <li class="badge badge-light p-1">Forks: {repo.forks}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGitRepos.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGitRepos);
