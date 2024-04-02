import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import '../pages/Assessment/reviewForm.css'
import { updateFieldHandler } from "../pages/Assessment/index"


export const ReviewFormAssessment = ({data, updateFieldHandler}) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" 
                    value="unsatisfied" 
                    name="review" 
                    required 
                    checked={data.review === "unsatisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" 
                    value="satisfied" 
                    name="review" 
                    required 
                    checked={data.review === "satisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" 
                    value="very_satisfied" 
                    name="review" 
                    checked={data.review === "very_satisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control no-border">
            <label for="comment">Dê mais detalhes sobre sua experiência: </label>
                <textarea 
                className='border-review'
                name="comment" 
                id="comment" 
                placeholder='Conte para nós sua experiência sendo ela positiva, construtiva ou negativa!'
                required
                value={data.comment || ""}
                onChange={(e) => updateFieldHandler("comment", e.target.value)}
                ></textarea>
            </div>
        </div>
    );
};

export default ReviewFormAssessment;