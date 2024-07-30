// src/app/components/ProgressBar.tsx
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const steps = ['Solicitante', 'Dados', 'Demanda', 'Revisao'];

const ProgressBar: FC = () => {
  const router = useRouter();

  const getStepIndex = (path: string) => {
    switch (path) {
      case '/solicitante':
        return 0;
      case '/dados':
        return 1;
      case '/demanda':
        return 2;
      case '/revisao':
        return 3;
      default:
        return 0;
    }
  };

  const currentStep = getStepIndex(router.pathname);

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <Link href={`/${step.toLowerCase()}`} key={index}>
          <a
            className={`flex-1 text-center py-2 ${
              index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {step}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProgressBar;
