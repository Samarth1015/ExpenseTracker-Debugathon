import axios from "axios";

const baseurl = "http://localhost:4000/transactions/";

const headers = (token) => {
  return { authorization: `bearer ${token}` };
};

const create = async (transaction) => {
  const token = localStorage.getItem("expenseTrackerToken");
  const res = await axios.post(baseurl, transaction, {
    headers: headers(token),
  });
  return res.data;
};

const fetchAll = async () => {
  const token = localStorage.getItem("expenseTrackerToken");
  const res = await axios.get(baseurl, { headers: headers(token) });
  return res.data;
};

const remove = async (id) => {
  console.log(id);
  const token = localStorage.getItem(id);
  console.log(`${baseurl}/transactions${id}`);
  const res = await axios.delete(`${baseurl}${id}`, {
    headers: headers(token),
  });
  return res;
};

const update = async (transaction) => {
  const token = localStorage.getItem("expenseTrackerToken");
  const res = await axios.put(baseurl + transaction.id, transaction, {
    headers: headers(token),
  });
  return res.data;
};

export default { create, fetchAll, remove, update };
