import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/githubExplorerLogo.svg';
import { Header, RepositoryInfo, Issues } from '../../styles/styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/5523565?s=460&u=3a0a33f6c3530529b305989c2090580c01aefbf0&v=4"
            alt="User"
          />
          <div>
            <strong>Oi</strong>
            <p>Oi</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Issues Abertas </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sah">
          <div>
            <strong>asad</strong>
            <p>adsa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
