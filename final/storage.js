const saveLS = (studyData) => {
    const serializedArr = JSON.stringify(studyData);
    localStorage.setItem("data", serializedArr);
  };
  
  const getLS = () => {
    const retrievedArr = localStorage.getItem("data");
    if (retrievedArr !== null) {
      return JSON.parse(retrievedArr);
    } else {
      return [];
    }
  };
  const studyData = getLS();
  export { studyData, saveLS, getLS };
  