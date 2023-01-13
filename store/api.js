import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://swapi.dev/api/",
  headers: {
    "Content-Type": "application/JSON",
  },
});

export default class API {
  //Get Items
  static async getItemsFromCategory(categoryName, page = 1) {
    let res = await axiosAPI.get(`/${categoryName}?page=${page}`);
    return res.data;
  }

  //Get One Item
  static async getOneItem(category, id) {
    let res = await axiosAPI.get(`/${category}/${id}/`);
    return res.data;
  }

  //people
  static async getAllPeople() {
    let res = await axiosAPI.get("/people");
    return res.data;
  }
  static async getOnePeople(id) {
    return await axiosAPI.get("/people/" + id);
  }

  //planets
  static async getAllPlanets() {
    let res = await axiosAPI.get("/planets");
    return res.data;
  }
  static async getOnePlanet(id) {
    return await axiosAPI.get("/planets/" + id);
  }

  //species
  static async getAllSpecies() {
    let res = await axiosAPI.get("/species");
    return res.data;
  }
  static async getOneSpecies(id) {
    return await axiosAPI.get("/species/" + id);
  }

  //films
  static async getAllFilms() {
    let res = await axiosAPI.get("/films");
    return res.data;
  }
  static async getOneFilms(id) {
    return await axiosAPI.get("/films/" + id);
  }

  //starships
  static async getAllStarships() {
    let res = await axiosAPI.get("/starships");
    return res.data;
  }
  static async getOneStarships(id) {
    return await axiosAPI.get("/starships/" + id);
  }

  //vehicles
  static async getAllVehicles() {
    let res = await axiosAPI.get("/vehicles");
    return res.data;
  }
  static async getOneVehicles(id) {
    return await axiosAPI.get("/vehicles/" + id);
  }
}
