import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import {
  Container,
  WorkExperience,
  Education,
  WorkData,
  AssignmentsWork,
} from "./styled";
import building from "../../assets/images/building.svg";
import location from "../../assets/images/location.svg";
import calendar from "../../assets/images/calendar.svg";

export function About() {
  return (
    <Container>
      <MyHeader />
      <Main>
        <h1>Sobre Mim</h1>
        <p>
          Sou uma estudante de Ciência da Computação, com
          foco em DevSecOps. Sou extremamente motivada, detalhista e preocupada
          em produzir trabalhos de qualidade. Meu objetivo é atuar como
          Desenvolvedor Back End ou DevSecOps em uma empresa inovadora, contribuindo com
          minhas habilidades para o desenvolvimento de soluções de qualidade
          e alta performance.
        </p>
        <h1>Experiência</h1>
        <WorkExperience>
          <div>
            <p>Analista de Teste e Qualidade</p>
            <p>Estágio</p>
          </div>
          <WorkData>
            <span>
              <p>
                <img src={building} alt="Building Icon" />
                Distribuidora Energisa
              </p>
              <p>
                <img src={location} alt="Location Icon" />
                João Pessoa, PB
              </p>
            </span>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              <p>Set 2022 - Mar 2023</p>
            </div>
          </WorkData>
          <AssignmentsWork>
            <ul>
              <li>
              Apoio nas homologações e desenvolvimento de APIs
              </li>
              <li>
              Escrever e manter atualizada a documentação de homologações
              </li>
              <li>
              Criação de cenários de testes pensando na experiência do cliente
              </li>
              <li>
              Trabalhando com metodologias ágeis (Scrum e Kanban)
              </li>
            </ul>
          </AssignmentsWork>
          <div className="divider"></div>
          
        </WorkExperience>

        <WorkExperience>
          <div>
            <p>DevSecOps</p>
            <p>Estágio</p>
          </div>
          <WorkData>
            <span>
              <p>
                <img src={building} alt="Building Icon" />
                Service IT
              </p>
              <p>
                <img src={location} alt="Location Icon" />
                Home-Office
              </p>
            </span>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              <p>Outubro 2023 - Present</p>
            </div>
          </WorkData>
          <AssignmentsWork>
            <ul>
              <li>
              Desenvolvimento de BOTS na área de segurança
              </li>
              <li>
              Desenvolvimento de automatizações usando Python e bibliotecas como Selenium, Pandas, Scikit-Learn e Paramiko
              </li>
              <li>
              Desenvolvimentos web usando frameworks como Django e Flask
              </li>
              <li>
              Uso de ambientes Docker
              </li>
              <li>
              Desenvolvimento e documentações de projetos de otimização de tarefas e processos para a empresa
              </li>
            </ul>
          </AssignmentsWork>
          <div className="divider"></div>
          
        </WorkExperience>
        <h1>Educação</h1>
        <Education>
          <div>
            <p>Ciência da Computação</p>
            <p>João Pessoa</p>
          </div>
          <div>
            <div>
              <img src={building} alt="Building Icon" />
              <p>Centro Universitário de João Pessoa</p>
            </div>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              Fev 2022 - Jun 2025
            </div>
          </div>
          <div className="divider"></div>
        </Education>
      </Main>
      {/* <MyFooter /> */}
    </Container>
  );
}
