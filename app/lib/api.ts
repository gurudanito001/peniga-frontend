import axios from "axios";
//import { API_URL } from "../utils/consts";
/* import { handleError } from "../utils/errors/errorFunctions";
import { showSimpleToast } from "../utils/alertFunctions"; */

type Method = "get" | "post" | "put" | "patch" | "delete";

async function setHeaders(customHeaders = {}) {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...customHeaders,
  };
}

function setBody(method: Method, data: unknown) {
  if (method === "get" || method === "delete") {
    return { params: data };
  }
  return { data };
}

function setUrl(url: string) {
  if (!url.startsWith("/")) url = `/${url}`;
  return `${url}`;
}

async function callApi(
  url: string,
  data: unknown,
  method: Method,
  customHeaders = {},
) {
  const headers = await setHeaders(customHeaders);
  const body = setBody(method, data);
  const fullUrl = setUrl(url);

  return new Promise((resolve, reject) => {
    axios({ url: fullUrl, method, headers, ...body })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error)
        if (error.status === 401 && !url.includes("login")) {
          setTimeout(() => {
            window.location.href = `/login?redirect=${window.location.pathname}`;
          }, 3000);
        }
        reject(error);
      });
  });
}

// Shortcuts
export const apiGet = (url: string, data = {}, headers = {}) =>
  callApi(url, data, "get", headers);

export const apiPost = (url: string, data = {}, headers = {}) =>
  callApi(url, data, "post", headers);

export const apiPut = (url: string, data = {}, headers = {}) =>
  callApi(url, data, "put", headers);

export const apiPatch = (url: string, data = {}, headers = {}) =>
  callApi(url, data, "patch", headers);

export const apiDelete = (url: string, data = {}, headers = {}) =>
  callApi(url, data, "delete", headers);
