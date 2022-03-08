import fs from "fs";

export const resolveFileToString = (url) => {
  return fs.readFileSync(url, "utf-8");
};
