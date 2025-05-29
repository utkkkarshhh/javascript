const API_URL = "https://randomuser.me/api/?results=100";

const fetchUsersByNat = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const users = data.results;

  const groupByCountry = users.reduce((acc, user) => {
    const nationality = user.nat;
    if (!acc[nationality]) {
      acc[nationality] = [];
    }
    acc[nationality].push(user);
    return acc;
  }, {});

  console.log(groupByCountry);
};

fetchUsersByNat();
