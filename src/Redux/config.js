export const base_url = "https://artist-hub-api.herokuapp.com";
export const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("auth-token"),
  },
};
