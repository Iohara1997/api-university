import UniversityService from "../services/universityService.js";

async function getUniversity(req, res, next) {
  try {
    const response = await UniversityService.listUniversity(req);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}

async function getUniversityById(req, res, next) {
  try {
    const { id } = req.params;
    const response = await UniversityService.listByIdUniversity(id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}

async function saveUniversity(req, res, next) {
  try {
    const response = await UniversityService.createUniversity(req.body);
    res
      .status(201)
      .send(`University successfully added with id: ${response._id}.`);
  } catch (error) {
    next(error);
  }
}

async function updateUniversity(req, res, next) {
  try {
    const { id } = req.params;
    const { web_pages, name, domains } = req.body;
    const university = { web_pages, name, domains };
    const response = await UniversityService.updateUniversity(id, university);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}

async function deleteUniversity(req, res, next) {
  try {
    const { id } = req.params;
    await UniversityService.deleteUniversity(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export default {
  getUniversity,
  getUniversityById,
  saveUniversity,
  updateUniversity,
  deleteUniversity,
};
