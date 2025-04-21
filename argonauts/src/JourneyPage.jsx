import { useState } from 'react';
import './JourneyPage.css';
import lemnosImage from './assets/lemnos.jpeg';
import symplegadesImage from './assets/symplegades.jpeg';
import thraceImage from './assets/thrace.jpeg';
import colchisImage from './assets/colchis.jpeg';
import escapeColchisImage from './assets/escape-colchis.jpeg';
import parchmentImage from './assets/parchment.jpeg';

function JourneyPage() {
  const [quizOpen, setQuizOpen] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [visibleSteps, setVisibleSteps] = useState([0]);
  const [heroismPopup, setHeroismPopup] = useState(null);

  const journeyPoints = [
    {
      title: 'The Gathering of the Argonauts (Lemnos)',
      image: lemnosImage,
      quizQuestion: 'Who was the leader of the Argonauts?',
      options: ['Hercules', 'Jason', 'Odysseus', 'Achilles'],
      correctAnswer: 'Jason',
      heroismText: 'The Argonauts assembly at Lemnos signifies a change in the ideas of heroism by emphasizing teamwork above individual bravery. Jasons leadership in putting together a diverse crew, including characters like Atalanta who defied gender norms, reflects a new model of heroism that values collaboration and inclusivity, challenging the traditional epic focus on a single, divinely favored hero. This is in contrast to Hercules, whose labors emphasized individual physical strength.',
      reference: 'Segal, C. (1995). *Euripides and the Poetics of Sorrow: Art, Gender, and Commemoration in Alcestis, Hippolytus, and Hecuba*. Duke University Press.'
    },
    {
      title: 'The Clashing Rocks (Symplegades)',
      image: symplegadesImage,
      quizQuestion: 'What did the Argonauts release to navigate the Clashing Rocks?',
      options: ['A dove', 'A fish', 'A hawk', 'A snake'],
      correctAnswer: 'A dove',
      heroismText: 'Like Odysseus "metis," navigating the Symplegades emphasizes an adaptation of heroism through strategic intelligence. In contrast to Hercules dependence on physical strength, Jasons use of a dove to determine the time of the rocks is an example of cleverness above force. In keeping with a larger cultural trend toward appreciating mental agility in epic stories, this chapter demonstrates how the Argonautica emphasizes intellectual prowess as a heroic virtue.',
      reference: 'Hunter, R. (1993). *The Argonautica of Apollonius: Literary Studies*. Cambridge University Press.'
    },
    {
      title: 'The Harpies and Phineus (Thrace)',
      image: thraceImage,
      quizQuestion: 'What did the Harpies do to Phineus?',
      options: ['Stole his food', 'Blinded him', 'Cursed his ship', 'Kidnapped his crew'],
      correctAnswer: 'Stole his food',
      heroismText: 'By aiding Phineus against the Harpies, Jason demonstrates a heroic ethic of compassion and communal responsibility, diverging from Hercules’ focus on personal glory through physical feats. This act of mercy reflects a broader theme shift in the Argonautica, where heroism encompasses moral duty and empathy, as well as physical prowess, redefining the epic hero as a protector of the vulnerable rather than solely a conqueror or powerhouse.',
      reference: 'Clauss, J. J. (2000). *The Best of the Argonauts: The Redefinition of the Epic Hero in Book 1 of Apollonius’ Argonautica*. University of California Press.'
    },
    {
      title: 'The Golden Fleece (Colchis)',
      image: escapeColchisImage,
      quizQuestion: 'Who helped Jason retrieve the Golden Fleece?',
      options: ['Athena', 'Medea', 'Aphrodite', 'Hera'],
      correctAnswer: 'Medea',
      heroismText: 'Jason’s retrieval of the Golden Fleece, reliant on Medea’s magic and emotional support, introduces a complex, interdependent heroism that contrasts with Hercules’ solitary triumphs. This partnership, fraught with moral ambiguity as seen in Euripides’ *Medea*, redefines the epic hero as a figure shaped by relational dynamics and ethical dilemmas, also routing the hero spot to sometimes come from not just the leader but the cast as well, which is the case with Medea, challenging the traditional ideal of an unassailable, divinely favored warrior.',
      reference: 'Segal, C. (1995). *Euripides and the Poetics of Sorrow: Art, Gender, and Commemoration in Alcestis, Hippolytus, and Hecuba*. Duke University Press.'
    },
    {
      title: 'The Return Journey (Escape from Colchis)',
      image: colchisImage,
      quizQuestion: 'What did Jason and Medea flee with?',
      options: ['The Argo', 'The Golden Fleece', 'A magical sword', 'A golden chariot'],
      correctAnswer: 'The Golden Fleece',
      heroismText: 'The escape from Colchis, marked by Jason’s navigation of betrayal and pursuit with Medea’s tragic involvement, highlights a heroism defined by resilience and moral complexity. Unlike Hercules’ straightforward valor, Jason’s journey reflects the Argonautica’s redefinition of epics as narratives that embrace human flaws and emotional depth, aligning with Euripides’ exploration of the hero as a paradoxical figure caught between glory and tragedy.',
      reference: 'Hunter, R. (1993). *The Argonautica of Apollonius: Literary Studies*. Cambridge University Press.'
    },
  ];

  const handleQuizSubmit = (pointIndex, selectedOption) => {
    const isCorrect = selectedOption === journeyPoints[pointIndex].correctAnswer;
    setQuizAnswers({ ...quizAnswers, [pointIndex]: selectedOption });

    if (isCorrect) {
      setQuizOpen(null);
      setHeroismPopup(pointIndex);
      if (pointIndex + 1 < journeyPoints.length) {
        setVisibleSteps([...visibleSteps, pointIndex + 1]);
      }
    } else {
      setQuizOpen(null);
    }
  };

  return (
    <div className="journey-container" style={{ backgroundImage: `url(${parchmentImage})` }}>
      <h1 className="journey-title">Voyage of the Argonautica</h1>
      <div className="journey-points">
        {journeyPoints.map((point, index) => (
          visibleSteps.includes(index) && (
            <div key={index} className="journey-point fade-in">
              <h2 onClick={() => setQuizOpen(index)}>{point.title}</h2>
              <img src={point.image} alt={point.title} className="point-image" />
              {quizOpen === index && (
                <div className="quiz-popup">
                  <div className="quiz-content">
                    <h3>{point.quizQuestion}</h3>
                    {point.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => handleQuizSubmit(index, option)}
                        className={quizAnswers[index] === option ? 'selected' : ''}
                      >
                        {option}
                      </button>
                    ))}
                    {quizAnswers[index] && (
                      <p>
                        {quizAnswers[index] === point.correctAnswer
                          ? 'Correct!'
                          : `Incorrect. The correct answer is ${point.correctAnswer}.`}
                      </p>
                    )}
                    <button onClick={() => setQuizOpen(null)} className="close-button">Close</button>
                  </div>
                </div>
              )}
              {heroismPopup === index && (
                <div className="heroism-popup">
                  <div className="heroism-content">
                    <h3>Redefining Heroism</h3>
                    <p>{point.heroismText}</p>
                    <p className="reference">Reference: {point.reference}</p>
                    <button onClick={() => setHeroismPopup(null)} className="close-button">Close</button>
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default JourneyPage;