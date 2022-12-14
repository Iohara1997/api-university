import universityRepository from "../repositories/universityRepository.js";

async function listUniversity(university) {
  const limit = 20;
  let { page, country } = university.query;
  let query = {};
  let response = {};
  let skip = 0;
  // If the page is not applied in query.
  if (!page) {
    response.page = 1;
    // Make the Default value one.
    skip = 0;
  } else {
    response.page = page;
    skip = (page - 1) * limit;
  }
  // To treat the lowercase first letter
  if (country) {
    country = country.toLowerCase();
    country = country[0].toUpperCase() + country.substring(1);
    query.country = country;
  }
  // We limit the columns for the client to view
  const universityProjection = {
    domains: false,
    alpha_two_code: false,
    web_pages: false,
    __v: false,
  };

  response.limit = limit;
  response.result = await universityRepository.getAll(
    query,
    universityProjection,
    limit,
    skip
  );
  return response;
}

async function listByIdUniversity(id) {
  const universityNotExists = "University not found.";

  const response = await universityRepository.getById(id);

  if (!response) return universityNotExists;
  return response;
}

async function createUniversity(university) {
  return await universityRepository.create(university);
}

async function updateUniversity(id, university) {
  const universityNotExists = "University not found.";

  const response = await universityRepository.update(id, university);

  if (!response) return universityNotExists;
  return response;
}

async function deleteUniversity(id) {
  return await universityRepository.remove(id);
}

export default {
  listUniversity,
  listByIdUniversity,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
