import '../pages/Assessment/thanks.css'
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiFrownFill } from 'react-icons/bs'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export const ThanksAssessment = ({data}) => {
    return (
        <div className='thanks-container'>
            <h2>Falta pouco...</h2>
            <p>Lembrando que você pode revisar abaixo suas respostas e caso tenha avaliado de forma incorreta é só clicar no botão "Voltar" e reavaliar.
                <br/> <br/> Para concluir a sua avaliação clique no botão de "Enviar" abaixo!</p>
            <h3>Resumo da sua avaliação: {data.name} </h3>
            <p className="review-data">
                <span>Satisfação geral: </span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    );
};

export default ThanksAssessment;