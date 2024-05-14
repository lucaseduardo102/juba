import { useState } from "react";
import { useFeedbackCreate } from "../../../domain";

export function useModalAssessmentService(appointmentId) {
  const [feedback, setFeedback] = useState({
    emotion: null,
    comment: null,
  });

  const handleFeedback = (key, value) => {
    setFeedback((prev) => ({ ...prev, [key]: value }));
  };

  const handleEmotion = (value) => {
    handleFeedback("emotion", value);
  };

  const handleComment = (event) => {
    handleFeedback("comment", event.target.value);
  };

  const { mutate, isPending } = useFeedbackCreate();

  const canContinue = !(
    feedback.emotion !== null &&
    feedback.comment !== null &&
    feedback.comment.length > 2
  );

  const sendData = () => {
    mutate({
      appointmentId,
      comment: feedback.comment,
      emotion: feedback.emotion,
    });
  };

  return {
    emotion: feedback.emotion,
    comment: feedback.comment,
    handleEmotion,
    handleComment,
    canContinue,
    isPending,
    sendData,
  };
}
