import { Row } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useCategoryGetAll } from "../../domain";
import { CardItem } from "./components/CardItem";

export function CatalogList() {
  const { data: categories, isError, isLoading } = useCategoryGetAll();

  const catalogSize = categories
    ?.map((category) => category.specialties.length)
    ?.filter((size) => size > 2).length;

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Categorias e Serviços</ScreenTitle>

          <Row
            className={`mx-auto ${
              catalogSize < 3 ? "justify-content-center" : ""
            }`}
            xs={1}
            md={3}
            lg={3}
          >
            {categories?.map((category) => (
              <CardItem key={category.id} category={category} />
            ))}
          </Row>
        </>
      )}
    </Screen>
  );
}
