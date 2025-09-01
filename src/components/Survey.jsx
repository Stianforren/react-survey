import { useState } from "react";
import FourCheckBoxes from "./FourCheckBoxes";
import FourRadioButtons from "./FourRadioButtons";
import AnswersItem from "./AnswersItem";
import RadioButton from "./RadioButton";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [formData, setFormData] = useState({ username: '',
                                            email: '',
                                            review:'',
                                            color: '',
                                            spend_time:[]
                                            
  })
  
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      if (formData[name].includes(value)){
        setFormData({...formData, [name] : formData[name].filter((item) => item !== value) })
      }else {
        setFormData({...formData, [name] : [...formData[name], value]}) 
      }
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    console.log(formData.spend_time)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(formData);
  
    setAnswers([
      ...answers, {
        username: formData.username,
        email: formData.email,
        review: formData.review,
        color: formData.color,
        spend_time: formData.spend_time
      }
    ]);
    setFormData({username:"",
                 email:"",
                 review:"",
                 color:"",
                 spend_time:[]
    })
    console.log("answers:", answers)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <table>
          <tbody>
            {answers.map((v) => (
              <div key={v.username}>
                <tr><td><b>How do you rate your rubber duck colour?</b></td></tr>
                <tr key={v.color}><td>{v.color}</td></tr>
                <tr><td><b>How do you like to spend time with your rubber duck</b></td></tr>
                <tr key='spend_time'> {v.spend_time.map(s => (<tr key=''><td key=''>{s}</td></tr>))} </tr>
                <tr><td><b>What else have you got to say about your rubber duck?</b></td></tr>
                <tr key={v.review}><td>{v.review}</td></tr>
                <tr><td><b>Put your name here (if you feel like it):</b></td></tr>
                <tr key={v.username}><td>{v.username}</td></tr>
                <tr><td><b>Leave us your email pretty please??</b></td></tr>
                <tr key={v.email}><td>{v.email}</td></tr>

              </div>
            ))}
          </tbody>
        </table>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButton name="color" handleChange={handleChange} checked={formData.color}/>        
          
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <FourCheckBoxes name="spend_time" first="swimming" second="bathing" third="chatting" fourth="I dont like to spend time with it" handleChange={handleChange} selected={formData.spend_time}/>
        </div>
        
        <label
          >What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
            onChange={handleChange}
          >
          </textarea>
          </label>
          <label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={formData.username} 
            onChange={handleChange}
            required
            />

          </label>
          <label>
            Leave us your email pretty please??<input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
          </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form> 
    </main>
  );
}

export default Survey;
