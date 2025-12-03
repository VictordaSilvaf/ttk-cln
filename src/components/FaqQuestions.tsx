import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs?: FAQItem[]; // opcional – se não passar, usa as perguntas da Makita
};

const defaultMakitaFAQs: FAQItem[] = [
  {
    question: "As baterias estão inclusas?",
    answer:
      "Não. O produto é vendido sem baterias. As baterias 18V LXT Makita são vendidas separadamente.",
  },
  {
    question: "Posso usar no carro?",
    answer:
      "Sim! Acompanha cabo para acendedor de cigarro (12V/24V), perfeito para viagens.",
  },
  {
    question: "Quanto tempo dura a bateria?",
    answer:
      "Com 2 baterias de 6,0 Ah, pode durar até 17 horas configurado a 5°C. A autonomia varia conforme temperatura externa e uso.",
  },
  {
    question: "É resistente à água?",
    answer:
      "Sim! Possui proteção IPX4, sendo resistente a respingos de água, ideal para uso ao ar livre.",
  },
  {
    question: "Qual a capacidade real?",
    answer:
      "O refrigerador tem capacidade de 50 litros, suficiente para muitas garrafas, latas e alimentos.",
  },
];

export default function FAQSection({
  faqs = defaultMakitaFAQs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-5">
      <h2 className="text-xl font-bold mb-4">Perguntas Frequentes</h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-border pb-4 last:border-b-0 last:pb-0"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left group focus:outline-none"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors pr-8">
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "mt-3" : "max-h-0"
              }`}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
