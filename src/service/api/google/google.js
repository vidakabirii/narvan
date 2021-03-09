import httpRequestHandler from "@/service/api/httpRequestHandler";

export const get = async (requestUrl) => {
  const URL = `${requestUrl}`;
  return await httpRequestHandler.get(URL).then((response) => response);
};
