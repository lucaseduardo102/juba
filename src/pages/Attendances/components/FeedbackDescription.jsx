import { Load } from "../../../components";
import { useFeedbackGetById } from "../../../domain";
import { mask } from "../../../utils";
import { Line } from "./Line";

export function FeedbackDescription({ appointmentId }) {
  const {
    data: feedback,
    isError,
    isLoading,
  } = useFeedbackGetById(appointmentId);

  if (isLoading || isError) {
    return <Load />;
  }

  return (
    <>
      <h5>Feedback</h5>
      <Line label="Nota" value={mask.formatStatus(feedback?.rating)} />
      <Line label="Comentário" value={feedback?.comment} />
    </>
  );
}
