import HiddenCosts from './components/HiddenCosts';
import OptinAndOptout from './components/OptinAndOptout';
import SneakIntoBasket from './components/SneakIntoBasket';
import TrickQuestions from './components/TrickQuestions';
import TrickQuestionsSample from './components/TrickQuestionsSample';

export default function Home() {
  return (
    <main className='container mx-auto py-4'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <SneakIntoBasket />
        <HiddenCosts />
        <TrickQuestions />
        <TrickQuestionsSample />
        <OptinAndOptout />
      </div>
    </main>
  );
}
