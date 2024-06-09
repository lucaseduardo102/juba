import { useState } from "react";
import { useFeedbackCreate } from "../../../domain";
import { ToastMessages, useToastStore } from "../../../services";

export function useModalAssessmentService({ appointmentId, handleVisibility }) {
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

  const { showToast } = useToastStore();

  const { mutate, isPending } = useFeedbackCreate();

  const sendData = () => {
    const request = {
      appointmentId,
      comment: feedback.comment,
      rating: feedback.emotion,
    };

    const mutateOptions = {
      onSuccess: () => {
        showToast({ message: ToastMessages.MyAppointments.Feedback.success });
        handleVisibility();
      },
      onError: () => {
        showToast({ message: ToastMessages.MyAppointments.Feedback.error });
      },
    };

    mutate(request, mutateOptions);
  };

  const canContinue = !(
    feedback.emotion !== null &&
    feedback.comment !== null &&
    feedback.comment.length > 2
  );

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
