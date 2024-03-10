import { categoryApi } from "./categoryApi";
import { useFetch } from "../../hooks/useFetch";

function create() {
  return useFetch(categoryApi.create);
}
function getAll() {
  return useFetch(categoryApi.getAll);
}
function getCategoriesAndSpecialties() {
  return useFetch(categoryApi.getCategoriesAndSpecialties);
}
function remove() {
  return useFetch(categoryApi.remove);
}
function update() {
  return useFetch(categoryApi.update);
}

export const categoryUseCases = {
  create,
  getAll,
  getCategoriesAndSpecialties,
  update,
  remove,
};
