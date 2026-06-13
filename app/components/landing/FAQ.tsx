


const faqItems = [
  {
    question: "What is RAWR?",
    answer: "RAWR is a real-time Valorant tracker that provides in-depth analytics, performance insights, and a vibrant community to help you improve your gameplay."
  },
  {
    question: "Can Valorant ban me for using RAWR?",
    answer: "No, RAWR is designed to be a safe and compliant tool for tracking your Valorant gameplay. We do not use any methods that violate Riot Games' terms of service. However, we always recommend using any third-party software responsibly and ensuring you download it from our official channels."
  },
  {
    question: "Is RAWR safe to use?",
    answer: "Yes, RAWR is designed with user safety in mind. We do not collect any personal data without your consent, and we use secure methods to access the necessary game data for tracking. Always download RAWR from our official channels to ensure you're getting the legitimate version."
  },
  {
    question: "Does RAWR contain viruses?",
    answer: "No, RAWR does not contain any viruses. We take security very seriously and ensure that our software is safe for users. If you have any concerns, please download RAWR from our official Discord server or website to avoid any potential scams."
  },
  {
    question: "Is RAWR free to use?",
    answer: "Yes, RAWR is completely free to use. We believe in providing valuable tools to the community without any cost."
  },
  {
    question: "How do I download RAWR?",
    answer: "You can download RAWR by clicking the Download button on our homepage, which will take you to our Discord server where you can find the latest version of the app."
  },
  {
    question: "Can I contribute to RAWR?",
    answer: "Absolutely! We welcome contributions from the community. You can join our Discord server to discuss ideas, report bugs, or even contribute code."
  }
];


export default function FAQ() {
    return (
        <div className="container mx-auto py-12 px-6" id="faq">
            <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-white text-center">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {faqItems.map((item, index) => (
                    <div className="bg-(--bkg-component) border border-(--bkg-border) rounded-2xl p-6" key={index}>
                        <h3 className="text-xl font-bold mb-2 text-white">
                            {item.question}
                        </h3>
                        <p className="text-zinc-400">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
                 
