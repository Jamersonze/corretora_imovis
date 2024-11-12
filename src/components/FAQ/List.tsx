import Question, { QEA } from "./Question";
import {
  Accordion
} from "@/components/ui/accordion"

type QuestionListProps = {
  QEAs: QEA[]
}

export default function QuestionList ({ QEAs }: QuestionListProps) {

  return (
      <Accordion type="single" collapsible className="w-1/2">
        {QEAs.map((QEA, index) => (
          <Question
            key={index}
            question={QEA.question}
            answer={QEA.answer}
            value={"item-" + index}
          />
        ))}
      </Accordion>
    );
  };