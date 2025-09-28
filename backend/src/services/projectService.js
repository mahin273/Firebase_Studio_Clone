import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/ServerConfig.js';
import fs from 'fs/promises';
import { execPromisified } from "../utils/execUtility.js";
import directoryTree from "directory-tree";
import path from "path";
export const createProjectService = async () => {
  const projectId = uuid4();
  console.log('New Project Id is: ', projectId);

  await fs.mkdir(`./projects/${projectId}`);

  const response = execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });

  return projectId;
}

export const getProjectTreeService = async (projectId) => {
  const projectPath = path.resolve(`./projects/${projectId}`);
  const tree = directoryTree(projectPath);
  return tree;
}
