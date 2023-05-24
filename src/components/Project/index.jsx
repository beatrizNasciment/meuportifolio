 import { ProjectsCards, Project, Links, Image } from "./styled";
import attendanceList from "../../assets/images/Captura de tela 2023-05-24 120255.png";
import cardForm from "../../assets/images/download.png";
import strangerThings from "../../assets/images/Captura de tela 2023-05-24 122733.png";
import habitTracker from "../../assets/images/habit-tracker.png";
import personalBudget from "../../assets/images/personal-budget.png";
import mosquitoKiller from "../../assets/images/mosquito-killer.jpg";
import github from "../../assets/images/github.svg";
import preview from "../../assets/images/preview.svg";

export function MyProject() {
  return (
    <ProjectsCards>
      <Project>
        <Image src={attendanceList} />
        <h3>Pipeline automatizada usando Python</h3>
        <p>
        Automatização do processo de obtenção e transformação dos dados.
        </p>
        <p>Tech Stacks: Python, Apache Airflow e PostegreSQL</p>
        <Links>
          <a
            href="https://github.com/beatrizNasciment/pipeline-dados"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={cardForm} />
        <h3>Automatização - MISP X TheHive X Cortex</h3>
        <p>
          Este projeto consiste em um sistema de integrado com ferramentas de segurança.
        </p>
        <p>Tech Stacks: Python e Docker</p>
        <Links>
          <a
            href="https://github.com/beatrizNasciment/Integrate-MISP"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={strangerThings} />
        <h3>Automatização do Data Loss Prevention</h3>
        <p>
          Criação de Monitoramento e Envio de Alertas usando DLP
        </p>
        <p>Tech Stacks: Python, Docker</p>
        <Links>
          
          <a
            href="https://github.com/beatrizNasciment/DataLoss"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
     
    
    </ProjectsCards>
  );
}
