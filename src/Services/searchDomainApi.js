export const getDomainAvailability = async (...serachAvailable) => {
  return await Promise.all([...serachAvailable]);
};

/*Promise.all([...a])
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.data;
        })
      );
    })
    .then(function (data) {
      setDomainAvail(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return domainAvail;*/
