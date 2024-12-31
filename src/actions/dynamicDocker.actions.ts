import Docker from "dockerode";
import { db } from "../config/db";
export const spinDynamicDocker = async (repoUrl: string) => {
  const docker = new Docker();
  console.log("container initiatlization!");

  // TODO : take input PORT number from user
  const container = await docker.createContainer({
    Image: "node:20", // Use Node.js image to run Next.js project
    Tty: true,
    Cmd: ["/bin/bash"],
    AttachStdout: true,
    AttachStderr: true,
    HostConfig: {
      PortBindings: {
        "5173/tcp": [
          {
            HostIp: "localhost",
            HostPort: "5173",
          },
        ],
      },
      Binds: [
        "C:/Development/personal project/WebContainers/backend/temp:/app", // Replace '/tmp/github-repo' with the desired local path
      ],
    },
  });
  console.log(`Container Created ${container.id}`);
  if (!container.id) {
    console.log("Error in creating Container!");
  }
  db.containerInformation.create({
    data: {
      userId: "1",
      containerId: container.id || "",
    },
  });
  await container.start();
  console.log("Container Running!");
  const exec = await container.exec({
    Cmd: ["git", "clone", repoUrl, "/app"], // Clone the GitHub repository into the container's '/app' directory
    AttachStdout: true,
    AttachStderr: true,
  });
  // TODO: Figure out the .env part
  const execStartPoint = await exec.start({ Detach: false, Tty: true });
  console.log("Pulled the code");

  // const exec1_1 = await container.exec({
  //   Cmd: ["rm", "-rf", "node_modules"],
  //   AttachStdout: true,
  //   AttachStderr: true,
  //   WorkingDir: "/app",
  // });
  // const exec1_1Start = await exec1_1.start({ Detach: false, Tty: true });
  // console.log("Deleted node modules");
  execStartPoint.on("data", async (data) => {
    const exec2 = await container.exec({
      Cmd: ["npm", "install"],
      AttachStdout: true,
      AttachStderr: true,
      WorkingDir: "/app",
    });
    const exec2Start = await exec2.start({ Detach: false, Tty: true });
    console.log("Installed the dependecies");
    exec2Start.on("data", (data) => {
      console.log(data.toString());
    });
    exec2Start.on("data", async (data) => {
      const exec3 = await container.exec({
        Cmd: ["npm", "run", "dev"],
        AttachStdout: true,
        AttachStderr: true,
        WorkingDir: "/app",
      });
      const exec3Start = await exec3.start({ Detach: false, Tty: true });
      console.log("Created Project at localhost:3000");
    });
  });
};
