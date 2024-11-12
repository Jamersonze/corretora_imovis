import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type QEA = {
  question: string;
  answer: string;
}

type QuestionProps = {
  question: string;
  answer: string;
  value: string
}

export default function Question({ question, answer, value}: QuestionProps) {

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};