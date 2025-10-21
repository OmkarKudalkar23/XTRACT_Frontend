import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Tracks() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  
  // Map track IDs to names
  const trackNames = {
    '1': 'Anabelle',
    '2': 'Valak',
    '3': 'Crooked Man',
    '4': 'Bathsheba Sherman'
  };
  
  const [unlocked, setUnlocked] = useState({
    ds: true,
    nlp: false,
    ml: false,
    cv: false,
  });

  const handleOpen = (id) => {
    if (!unlocked[id]) {
      alert("This file is locked. Complete the previous task first!");
      return;
    }
    const el = document.getElementById(id);
    el.classList.add("z-20", "opacity-100");
    el.classList.remove("z-[-1]", "opacity-0");
  };

  const handleSubmit = (e, currentId, nextId) => {
    e.preventDefault();

    alert("Form submitted! Returning to the table...");
    const el = document.getElementById(currentId);
    el.classList.remove("z-20", "opacity-100");
    el.classList.add("z-[-1]", "opacity-0");

    if (nextId) {
      setUnlocked((prev) => ({ ...prev, [nextId]: true }));
    }
  };

  return (
    <>
      <div
        className="relative z-5"
        style={{
          backgroundImage: 'url(/assets/images/ps-table.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/door')}
          className="absolute top-8 left-8 z-30 bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors shadow-lg"
        >
          ← Back to Doors
        </button>
        
        {/* Track Header */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 text-center drop-shadow-lg font-serif">
            {trackNames[trackId] || 'Unknown Track'}
          </h1>
        </div>
        
        {/* DS FILE */}
        <div
          style={{
            backgroundImage: 'url(/assets/images/dsfile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute left-130 top-60 h-[250px] w-[320px] cursor-pointer"
          onClick={() => handleOpen('ds')}
        />
        <div
          id="ds"
          className="absolute top-0 left-0 z-[-1] opacity-0 transition-all duration-500 ease-in-out flex justify-center items-center h-[100vh] w-[100vw] bg-black/80"
        >
          <div
            style={{
              backgroundImage: 'url(/assets/images/door1bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="text-red-700 px-24 pt-24 pb-14 w-[70%] rounded-lg font-serif"
          >
            <h1 className="text-4xl font-bold pb-8">QUESTION 1</h1>
            <span className="text-xl">
              To start off with the plan, you need to figure out the date on
              which you would exact your revenge. As an event, it's the day when
              the final verdict for Jindal's sentence was passed. <br />
              In the year of the tiger, a Scorpio was bound to gain <br />
              trunk-loads of money: '44.06' kgs to be exact. <br />
              Commence your journey by submitting the date in ISO format.
            </span>
            <form
              onSubmit={(e) => handleSubmit(e, "ds", "nlp")}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Type your answer"
                className="my-4 border-4 border-red-700 h-12 px-4 text-xl font-extrabold text-red-700 outline-none w-full"
              />
              <button
                type="submit"
                style={{
                  backgroundImage: 'url(/assets/images/submitButton.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="rounded-3xl h-35 w-55 cursor-pointer"
              ></button>
            </form>
          </div>
        </div>

        {/* NLP FILE */}
        <div
          style={{
            backgroundImage: 'url(/assets/images/nlpfile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute left-210 top-50 h-[320px] w-[320px]"
          onClick={() => handleOpen('nlp')}
        />
        <div
          id="nlp"
          className="absolute top-0 left-0 z-[-1] opacity-0 transition-all duration-500 ease-in-out flex justify-center items-center h-[100vh] w-[100vw] bg-black/80"
        >
          <div
            style={{
              backgroundImage: 'url(/assets/images/door1bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="text-red-700 px-24 pt-24 pb-14 w-[70%] rounded-lg font-serif"
          >
            <h1 className="text-4xl font-bold pb-8">QUESTION 2</h1>
            <span className="text-xl">
              To start off with the plan, you need to figure out the date on
              which you would exact your revenge. As an event, it's the day when
              the final verdict for Jindal's sentence was passed. <br />
              In the year of the tiger, a Scorpio was bound to gain <br />
              trunk-loads of money: '44.06' kgs to be exact. <br />
              Commence your journey by submitting the date in ISO format.
            </span>
            <form
              onSubmit={(e) => handleSubmit(e, "nlp", "ml")}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Type your answer"
                className="my-4 border-4 border-red-700 h-12 px-4 text-xl font-extrabold text-red-700 outline-none w-full"
              />
              <button
                type="submit"
                style={{
                  backgroundImage: 'url(/assets/images/submitButton.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="rounded-3xl h-35 w-55 cursor-pointer"
              ></button>
            </form>
          </div>
        </div>

        {/* ML FILE */}
        <div
          style={{
            backgroundImage: 'url(/assets/images/mlfile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute left-130 top-120 h-[250px] w-[320px]"
          onClick={() => handleOpen('ml')}
        />
        <div
          id="ml"
          className="absolute top-0 left-0 z-[-1] opacity-0 transition-all duration-500 ease-in-out flex justify-center items-center h-[100vh] w-[100vw] bg-black/80"
        >
          <div
            style={{
              backgroundImage: 'url(/assets/images/door1bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="text-red-700 px-24 pt-24 pb-14 w-[70%] rounded-lg font-serif"
          >
            <h1 className="text-4xl font-bold pb-8">QUESTION 3</h1>
            <span className="text-xl">
              To start off with the plan, you need to figure out the date on
              which you would exact your revenge. As an event, it's the day when
              the final verdict for Jindal's sentence was passed. <br />
              In the year of the tiger, a Scorpio was bound to gain <br />
              trunk-loads of money: '44.06' kgs to be exact. <br />
              Commence your journey by submitting the date in ISO format.
            </span>
            <form
              onSubmit={(e) => handleSubmit(e, "ml", "cv")}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Type your answer"
                className="my-4 border-4 border-red-700 h-12 px-4 text-xl font-extrabold text-red-700 outline-none w-full"
              />
              <button
                type="submit"
                style={{
                  backgroundImage: 'url(/assets/images/submitButton.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="rounded-3xl h-35 w-55 cursor-pointer"
              ></button>
            </form>
          </div>
        </div>

        {/* CV FILE */}
        <div
          style={{
            backgroundImage: 'url(/assets/images/opencvfile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute left-220 top-105 h-[320px] w-[320px]"
          onClick={() => handleOpen('cv')}
        />
        <div
          id="cv"
          className="absolute top-0 left-0 z-[-1] opacity-0 transition-all duration-500 ease-in-out flex justify-center items-center h-[100vh] w-[100vw] bg-black/80"
        >
          <div
            style={{
              backgroundImage: 'url(/assets/images/door1bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="text-red-700 px-24 pt-24 pb-14 w-[70%] rounded-lg font-serif"
          >
            <h1 className="text-4xl font-bold pb-8">QUESTION 4</h1>
            <span className="text-xl">
              To start off with the plan, you need to figure out the date on
              which you would exact your revenge. As an event, it's the day when
              the final verdict for Jindal's sentence was passed. <br />
              In the year of the tiger, a Scorpio was bound to gain <br />
              trunk-loads of money: '44.06' kgs to be exact. <br />
              Commence your journey by submitting the date in ISO format.
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("All levels completed! Returning to the table...");
                const el = document.getElementById("cv");
                el.classList.remove("z-20", "opacity-100");
                el.classList.add("z-[-1]", "opacity-0");
              }}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Type your answer"
                className="my-4 border-4 border-red-700 h-12 px-4 text-xl font-extrabold text-red-700 outline-none w-full"
              />
              <button
                type="submit"
                style={{
                  backgroundImage: 'url(/assets/images/submitButton.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="rounded-3xl h-35 w-55 cursor-pointer"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracks;
