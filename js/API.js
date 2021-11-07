const urlBase = "http://localhost:3000";

const getFurniture = (resolve, reject) => {
  fetch(urlBase + "/furniture")
    .then((data) => data.json())
    .then(resolve)
    .catch(reject);
};

const deleteFurniture = (resolve, reject, id) => {
  fetch(urlBase + "/furniture/" + id, { method: "DELETE" })
    .then(resolve)
    .catch(reject);
};
const API = {
  getFurniture,
  deleteFurniture,
};
