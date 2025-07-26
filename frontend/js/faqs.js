// FAQ data
const faqs = [
  {
    question: "What is TibaChat?",
    answer: "TibaChat is an AI-powered healthcare chatbot designed to provide medical information, answer health-related questions, and offer guidance on various health topics. It's a virtual health assistant that can help you understand symptoms, medications, and general health information."
  },
  {
    question: "Is TibaChat a replacement for professional medical care?",
    answer: "No, TibaChat is not a replacement for professional medical care. While it can provide general health information and answer questions, it should not be used for diagnosis, treatment, or emergency situations. Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment."
  },
  {
    question: "What kind of health information can TibaChat provide?",
    answer: "TibaChat can provide information about common health topics, explain medical terms, discuss general wellness tips, and offer guidance on lifestyle factors that affect health. However, it cannot diagnose conditions, prescribe medications, or provide personalized medical advice."
  },
  {
    question: "How accurate is the medical information provided by TibaChat?",
    answer: "TibaChat is trained on reliable medical sources and databases, but the information provided is for educational purposes only. Medical knowledge is constantly evolving, and individual health situations vary greatly. Always verify information with healthcare professionals."
  },
  {
    question: "Can I use TibaChat for emergency medical situations?",
    answer: "No, TibaChat should not be used for emergency medical situations. If you're experiencing a medical emergency, call emergency services immediately or go to the nearest emergency room. TibaChat is designed for general health information and education only."
  },
  {
    question: "Is my health information private when using TibaChat?",
    answer: "We take privacy seriously. While TibaChat may collect conversation data to improve its responses, we do not store personal health information or share your data with third parties. However, we recommend not sharing personal medical details in conversations."
  },
  {
    question: "What should I do if TibaChat provides information that conflicts with my doctor's advice?",
    answer: "Always follow your doctor's advice over any information provided by TibaChat. Your healthcare provider knows your specific medical history and current situation. If you have questions about conflicting information, discuss it with your doctor."
  },
  {
    question: "Can TibaChat help me understand my medication?",
    answer: "TibaChat can provide general information about medications, including common uses, side effects, and interactions. However, for specific questions about your medication, always consult your pharmacist or healthcare provider who can consider your individual circumstances."
  },
  {
    question: "How can I get the most accurate information from TibaChat?",
    answer: "Be specific in your questions, provide relevant context, and ask follow-up questions if needed. Remember that TibaChat provides general information and should not be used for self-diagnosis or treatment decisions."
  },
  {
    question: "What are the limitations of TibaChat?",
    answer: "TibaChat cannot diagnose medical conditions, prescribe medications, provide emergency medical advice, or replace professional healthcare. It's designed for educational purposes and general health information only. Always consult healthcare professionals for medical decisions."
  }
];

// Function to create FAQ cards
function createFAQCard(faq, index) {
  const card = document.createElement('div');
  card.className = 'faq-card';
  card.innerHTML = `
    <div class="faq-question">
      <span>${faq.question}</span>
      <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
      ${faq.answer}
    </div>
  `;
  
  // Add click event to toggle answer
  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    const toggle = card.querySelector('.faq-toggle');
    
    if (isOpen) {
      card.classList.remove('open');
      toggle.textContent = '+';
    } else {
      card.classList.add('open');
      toggle.textContent = '−';
    }
  });
  
  return card;
}

// Function to initialize FAQs
function initializeFAQs() {
  const faqsList = document.getElementById('faqsList');
  
  if (faqsList) {
    faqs.forEach((faq, index) => {
      const card = createFAQCard(faq, index);
      faqsList.appendChild(card);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFAQs);
