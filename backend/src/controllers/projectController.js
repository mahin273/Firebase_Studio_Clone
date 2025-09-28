import child_process from 'child_process';
import fs from 'fs/promises';
import util from 'util';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/ServerConfig.js';

const execPromisified = util.promisify(child_process.exec);
export const createProjectController = async (req, res) => {
  const projectId = uuid4();
  console.log('New Project Id is: ', projectId);

  await fs.mkdir(`./projects/${projectId}`);

  const response = execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });

  return res.json({ message: 'Project Created ', data: projectId });
};
