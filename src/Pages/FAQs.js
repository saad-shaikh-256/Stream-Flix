import React, { useState } from "react";
import "../output.css";
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faq = [
    {
      question: "What is StreamFlix?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
    {
      question: "How much does StreamFlix Cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
    {
      question: "Where can i watch?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
    {
      question: "What can I watch on StreamFlix?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
    {
      question: "is xilfteN good for kids?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt iusto alias blanditiis perspiciatis? Adipisci, assumenda doloremque exercitationem ullam mollitia molestias.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <section className="h-fit w-full bg-baseblack text-basewhite font-poppins flex flex-col justify-center items-start px-5 py-12 gap-8 sm:px-10 sm:py-14 md:px-15 md:py-16 lg:px-20">
        <div
          id="faq-Heading"
          className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold"
        >
          Frequently Asked Questions
        </div>
        <div id="faq-Content" className="h-fit w-full flex flex-col gap-4">
          {faq.map((faq, index) => (
            <div
              key={index}
              className="h-fit w-full flex flex-col gap-2 justify-center items-center"
            >
              <div
                id="faq-Question"
                className="h-fit w-full flex justify-between items-center px-6 sm:px-7 lg:px-8 py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl rounded-2xl bg-neutral-800 font-medium border-2 border-neutral-700 hover:bg-neutral-700 active:bg-neutral-700 hover:border-neutral-600 active:border-neutral-600 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <i class="hgi hgi-stroke hgi-remove-01"></i>
                  ) : (
                    <i class="hgi hgi-stroke hgi-add-01"></i>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div
                  id="faq-Answer"
                  className="h-fit w-full flex justify-between items-center px-6 sm:px-7 lg:px-8 py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-2xl bg-neutral-800 border-2 border-neutral-700"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQs;
