import mockingoose from "mockingoose";
import University from "../../models/university.js";
import universityRepository from "../../repositories/universityRepository.js";

describe("University repository", () => {
  describe("getAll", () => {
    it("should return the list of universities", async () => {
      mockingoose(University).toReturn(
        [
          {
            _id: "632692e998552f0d9e2e6052",
            domains: ["universidade.edu.br"],
            alpha_two_code: "BR",
            country: "Brazil",
            web_pages: ["http://www.universidade.edu.br/"],
            name: "Universidade D",
            "state-province": "São Paulo",
            __v: 0,
          },
        ],
        "find"
      );
      const results = await universityRepository.getAll();
      expect(results[0].name).toBe("Universidade D");
    });
  });
  describe("getById", () => {
    it("should return a university", async () => {
      mockingoose(University).toReturn(
        {
          _id: "632692e998552f0d9e2e6052",
          domains: ["universidade.edu.br"],
          alpha_two_code: "BR",
          country: "Brazil",
          web_pages: ["http://www.universidade.edu.br/"],
          name: "Universidade D",
          "state-province": "São Paulo",
          __v: 0,
        },
        "findOne"
      );
      const universityId = "632692e998552f0d9e2e6052";
      const result = await universityRepository.getById(universityId);
      expect(`${result._id}`).toEqual(`${universityId}`);
    });
  });
  describe("create", () => {
    it("should create a university", async () => {
      mockingoose(University).toReturn(
        {
          _id: "632692e998552f0d9e2e6052",
          domains: ["universidade.edu.br"],
          alpha_two_code: "BR",
          country: "Brazil",
          web_pages: ["http://www.universidade.edu.br/"],
          name: "Universidade D",
          "state-province": "São Paulo",
          __v: 0,
        },
        "save"
      );
      const university = {
        domains: ["universidade.edu.br"],
        alpha_two_code: "BR",
        country: "Brazil",
        web_pages: ["http://www.universidade.edu.br/"],
        name: "Universidade D",
        "state-province": "São Paulo",
      };
      const result = await universityRepository.create(university);
      expect(result.name).toBe("Universidade D");
    });
  });
  describe("update", () => {
    it("should update a university", async () => {
      mockingoose(University).toReturn(
        {
          _id: "632692e998552f0d9e2e6052",
          domains: ["universidade.edu.br"],
          alpha_two_code: "BR",
          country: "Brazil",
          web_pages: ["http://www.universidade.edu.br/"],
          name: "Universidade DA",
          "state-province": "São Paulo",
          __v: 0,
        },
        "findOneAndUpdate"
      );
      const university = {
        web_pages: ["http://www.universidade.edu.br/"],
        name: "Universidade DA",
        domains: ["universidade.edu.br"],
      };
      const universityId = "632692e998552f0d9e2e6052";
      const result = await universityRepository.update(
        universityId,
        university
      );
      expect(result.name).toBe(university.name);
    });
  });
  describe("remove", () => {
    it("should delete a university", async () => {
      mockingoose(University).toReturn(
        {
          _id: "632692e998552f0d9e2e6052",
          domains: ["universidade.edu.br"],
          alpha_two_code: "BR",
          country: "Brazil",
          web_pages: ["http://www.universidade.edu.br/"],
          name: "Universidade D",
          "state-province": "São Paulo",
          __v: 0,
        },
        "findOneAndDelete"
      );
      const universityId = "632692e998552f0d9e2e6052";
      const result = await universityRepository.remove(universityId);
      expect(`${result._id}`).toEqual(`${universityId}`);
    });
  });
});
