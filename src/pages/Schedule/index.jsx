import { Col, Form, Row } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useCategoryGetAll } from "../../domain";
import { useScheduleStore } from "../../services";
import { ScheduleSelector } from "./components/ScheduleSelector";

export function Schedule() {
  const {
    categories,
    isLoading,
    isError,
    specialties,
    selectedCategory,
    selectedSpecialty,
    handleCategory,
    handleSpecialty,
  } = useCatalogService();

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Novo agendamento</ScreenTitle>
          <Row xs={2}>
            <Col>
              <Form.Label className="ms-2">Categoria</Form.Label>
              <Form.Select onChange={handleCategory}>
                {!selectedCategory && <option>Selecione uma categoria</option>}
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>Especialidade</Form.Label>
              <Form.Select
                value={selectedSpecialty?.id}
                onChange={handleSpecialty}
              >
                {specialties?.length === 0 && selectedSpecialty !== null ? (
                  <option>Nenhuma especialidade disponível</option>
                ) : (
                  <option>Selecione uma especialidade</option>
                )}
                {specialties?.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          {selectedSpecialty?.id && (
            <ScheduleSelector specialtyId={selectedSpecialty.id} />
          )}
        </>
      )}
    </Screen>
  );
}

const useCatalogService = () => {
  const { data: categories, isLoading, isError } = useCategoryGetAll();

  const {
    appointment: { category: selectedCategory, specialty: selectedSpecialty },
    handleChangeValue,
  } = useScheduleStore();

  const getSelectedCategory = (categoryId) =>
    categories?.find((category) => category.id === Number(categoryId));

  const getSelectedSpecialty = (specialtyId) =>
    getSelectedCategory(selectedCategory?.id)?.specialties?.find(
      (specialty) => specialty.id === specialtyId
    );

  const handleCategory = (event) => {
    handleChangeValue("category", getSelectedCategory(event.target.value));
  };

  const handleSpecialty = (event) => {
    handleChangeValue("specialty", getSelectedSpecialty(event.target.value));
  };

  const specialties = categories
    ?.filter((category) => category.id === selectedCategory?.id)
    .flatMap((category) => category.specialties);

  return {
    categories,
    isLoading,
    isError,
    specialties,
    selectedCategory,
    selectedSpecialty,
    handleCategory,
    handleSpecialty,
  };
};
