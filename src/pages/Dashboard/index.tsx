import React from 'react';
import './styles.ts';
import logoImg from '../../assets/githubExplorerLogo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/5523565?s=460&u=3a0a33f6c3530529b305989c2090580c01aefbf0&v=4"
            alt="Repository Image"
          ></img>
          <div>
            <strong>yangricardo/elisapp</strong>
            <p>Alguma descrição aleatória</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/5523565?s=460&u=3a0a33f6c3530529b305989c2090580c01aefbf0&v=4"
            alt="Repository Image"
          ></img>
          <div>
            <strong>yangricardo/elisapp</strong>
            <p>Alguma descrição aleatória</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/5523565?s=460&u=3a0a33f6c3530529b305989c2090580c01aefbf0&v=4"
            alt="Repository Image"
          ></img>
          <div>
            <strong>yangricardo/elisapp</strong>
            <p>Alguma descrição aleatória</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
