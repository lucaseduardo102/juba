import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useFeedbackGetAll } from "../../domain";
import { mask } from "../../utils";

export function FeedbackList() {
  const { isLoading, isError, data: feedbacks } = useFeedbackGetAll();
  return (
    <Screen fluid="sm">
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Avaliações</ScreenTitle>
          <p className="text-center">
            Confira o que nossos clientes têm a dizer sobre sua experiência
            conosco.
          </p>
          <Row
            xs={1}
            sm={1}
            md={3}
            lg={3}
            className="justify-content-center mt-5"
          >
            {feedbacks?.map(
              ({ id, employee, specialty, scheduling, comment, rating }) => (
                <Col className="d-flex justify-content-center" key={id}>
                  <Card
                    style={{ width: 500 }}
                    className="mb-4 text-center shadow border-1"
                  >
                    <Card.Body className="p-4">
                      <Card.Title className="mb-3">{specialty.name}</Card.Title>
                      <div className="mb-2 text-start">
                        <strong>Dia:</strong>{" "}
                        {mask.parseDateToBrl(scheduling.date)}
                      </div>
                      <div className="mb-2 text-start">
                        <strong>Funcionário:</strong> {employee.name}
                      </div>
                      <div className="mb-2 text-start">
                        <strong>Nota:</strong> {mask.formatStatus(rating)}
                      </div>
                      <div className="mb-2 text-start">
                        <strong>Comentário:</strong>{" "}
                        <span className="text-muted">{comment}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </>
      )}
    </Screen>
  );
}
