import { spinDynamicDocker } from "../actions/dynamicDocker.actions";

export const githubLinkUpload = (req: any, res: any) => {
  try {
    const url = req.body.url;
    console.log(`recieved the url = ${url}`);
    spinDynamicDocker(url);
    res.status(200).send({
      message: "Recieved the url, Container running...",
    });
  } catch (e: any) {}
};
