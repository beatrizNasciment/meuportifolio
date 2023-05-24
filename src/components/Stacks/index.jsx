import { Stacks } from "./styled";
import html from "../../assets/images/icons8-python.svg";
import css from "../../assets/images/java-svgrepo-com.svg";
import sass from "../../assets/images/docker-svgrepo-com.svg";
import javascript from "../../assets/images/javascript.svg";
import git from "../../assets/images/git.svg";
import react from "../../assets/images/react.svg";
import sqlite from "../../assets/images/mysql-ar21.svg";
import vscode from "../../assets/images/vscode.svg";

export function MyStacks() {
  return (
    <Stacks>
      <img src={html} alt="Python Icon" />
      <img src={css} alt="Java Icon" />
      <img src={sass} alt="Docker Icon" />
      <img src={javascript} alt="JavaScript Icon" />
      <img src={git} alt="Git Icon" />
      <img src={react} alt="React Icon" />
      <img src={sqlite} alt="MySQL" />
      <img src={vscode} alt="Visual Studio Code Icon" />
    </Stacks>
  );
}
