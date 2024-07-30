'use client'
import ProgressBar from '../components/ProgressBar';

const Solicitante = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    window.location.href = '/dados'; // Redireciona para a página /dados
  };

  return (
    <div className="container mx-auto p-8 h-screen flex flex-col">
      <ProgressBar />
      <h1 className="text-2xl font-bold mb-8">Solicitante</h1>
      <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">
            CLIENTE
          </label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700">
            Técnico Responsável pela Demanda
          </label>
          <input
            type="text"
            id="tecnico"
            name="tecnico"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Solicitante;
