const cohortName = "2305-FTB-ET-WEB-PT";
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}
