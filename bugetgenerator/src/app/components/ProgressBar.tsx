'use client'
'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const steps = ['Solicitante', 'Dados', 'Demanda', 'Revisao'];

const ProgressBar: FC = () => {
  const pathname = usePathname();

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

  const currentStep = getStepIndex(pathname);

  return (
    <div className="relative flex flex-col items-center mb-8">
      <div className="relative m-0 p-0 flex justify-between w-6/12 mb-4">
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>
        <div
          className="absolute top-5 left-0 h-1 bg-green-500 z-0 transform -translate-y-1/2"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center z-10">
            <Link href={`/${step.toLowerCase()}`} legacyBehavior>
              <a
                className={`flex items-center justify-center w-10 h-10 rounded-full  ${
                  index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </a>
            </Link>
            <span className="mt-2 text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
