import University from "../models/university.js";

async function get(query, universityProjection, limit, skip) {
  return await University.find(query, universityProjection)
    .limit(limit)
    .skip(skip)
    .lean()
    .exec();
}

async function getById(id) {
  return University.findById(id).lean().exec();
}

async function create(university) {
  const post = University(university);
  return await post.save();
}

async function update(id, updateUniversity) {
  return await University.findByIdAndUpdate(id, updateUniversity, {
    new: true,
  })
    .lean()
    .exec();
}

async function remove(id) {
  return await University.findByIdAndDelete(id).lean().exec();
}

export default {
  get,
  getById,
  create,
  update,
  remove,
};
