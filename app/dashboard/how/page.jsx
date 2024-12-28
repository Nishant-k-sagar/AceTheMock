import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
  return (
    <>

<div className="bg-gradient-to-r from-teal-200 to-green-200 h-full">
      <Head>
        <title>How It Works-AceTheMock</title>
        <meta
          name="description"
          content="Learn how our AI Mock Interview works."
        />
      </Head>
      <main className="bg-gradient-to-r from-white to-green-200 p-8 mt-10">
        <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>
        <section className="space-y-8">
          <Accordion type="single" collapsible>

          <AccordionItem value="item-1">
  <AccordionTrigger>
    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      Step 1: Prepare for the Interview
    </h2>
  </AccordionTrigger>
  <AccordionContent>
    <p className="text-gray-700 text-lg">
      Get started by selecting the type of interview that best fits your needs. Provide some essential details about the job position you're applying for, and our system will tailor a mock interview experience to help you prepare.
    </p>
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-2">
  <AccordionTrigger>
    {" "}
    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      Step 2: Start the AI Interview
    </h2>
  </AccordionTrigger>
  <AccordionContent>
    <p className="text-gray-700 text-lg">
      Our advanced AI technology will engage you in a realistic conversation, asking you a series of questions that mimic a real interview. Respond as you would in a real interview, and our system will evaluate your answers in real-time, providing you with valuable insights into your performance.
    </p>
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-3">
  <AccordionTrigger>
    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      Step 3: Receive Feedback
    </h2>
  </AccordionTrigger>
  <AccordionContent>
    <p className="text-gray-700 text-lg">
      After completing the mock interview, you'll receive a comprehensive report highlighting your strengths and areas for improvement. Use this feedback to refine your responses, work on your weaknesses, and boost your confidence for the real interview.
    </p>
  </AccordionContent>
</AccordionItem>
            {/* <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 1: Prepare for the Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Get ready by selecting the type of interview and providing
                  some details about the job position.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                {" "}
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 2: Start the AI Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Our AI will ask you a series of questions and evaluate your
                  responses in real-time.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 3: Receive Feedback
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Get detailed feedback on your performance, including strengths
                  and areas for improvement.
                </p>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </section>
      </main>
    </div>
    </>
  );
};

export default HowItWorks;
