export const fetchUserHistory = (id, localToken) => {
  return fetch(`http://localhost:7000/api/user-history?id=${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localToken}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(
        "Something went wrong while getting userHistory " +
          JSON.stringify(error)
      );
    });
};
