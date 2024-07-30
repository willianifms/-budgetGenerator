// src/app/demanda/page.tsx
'use client';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

const Demanda = () => {
  const [formData, setFormData] = useState({
    compraMaterial: [{ descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    maoDeObra: [{ descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    terceiros: [{ descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    equipamentos: [{ descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    cenografia: [{ descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    servicos: [{ descricao: 'Serviços de Produção e Execução', fornecedor: 'Sayuri Higa - ME', qtde: 2, diaria: 2, valorUnitario: 0, valorTotal: 0 }],
  });

  const handleChange = (section: string, index: number, field: string, value: string | number) => {
    const updatedSection = formData[section].map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddRow = (section: string) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], { descricao: '', fornecedor: '', qtde: 0, diaria: 0, valorUnitario: 0, valorTotal: 0 }],
    });
  };

  const handleRemoveRow = (section: string, index: number) => {
    setFormData({
      ...formData,
      [section]: formData[section].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('demandaFormData', JSON.stringify(formData));
    window.location.href = '/revisao';
  };

  return (
    <div className="container mx-auto p-8 h-screen flex flex-col">
      <ProgressBar />
      <h1 className="text-2xl font-bold mb-8">Demandas do Evento</h1>
      <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
        {/* Compra de Material */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Compra de Material</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.compraMaterial.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('compraMaterial', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('compraMaterial', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('compraMaterial', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('compraMaterial', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('compraMaterial', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('compraMaterial', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('compraMaterial', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('compraMaterial')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Mão de Obra */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Mão de Obra</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.maoDeObra.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('maoDeObra', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('maoDeObra', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('maoDeObra', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('maoDeObra', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('maoDeObra', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('maoDeObra', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('maoDeObra', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('maoDeObra')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Contratação de Terceiros */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contratação de Terceiros</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.terceiros.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('terceiros', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('terceiros', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('terceiros', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('terceiros', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('terceiros', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('terceiros', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('terceiros', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('terceiros')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Equipamentos de Sonorização, Audiovisual e Iluminação */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Equipamentos de Sonorização, Audiovisual e Iluminação</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.equipamentos.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('equipamentos', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('equipamentos', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('equipamentos', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('equipamentos', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('equipamentos', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('equipamentos', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('equipamentos', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('equipamentos')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Cenografia */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Cenografia</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.cenografia.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('cenografia', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('cenografia', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('cenografia', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('cenografia', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('cenografia', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('cenografia', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('cenografia', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('cenografia')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Serviços */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Serviços de Organização, Planejamento, Produção e Execução</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Qtde</th>
                <th className="border p-2">Diária</th>
                <th className="border p-2">Item</th>
                <th className="border p-2">Fornecedor</th>
                <th className="border p-2">Valor Unitário</th>
                <th className="border p-2">Valor Total</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.servicos.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qtde}
                      onChange={(e) => handleChange('servicos', index, 'qtde', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.diaria}
                      onChange={(e) => handleChange('servicos', index, 'diaria', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.descricao}
                      onChange={(e) => handleChange('servicos', index, 'descricao', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.fornecedor}
                      onChange={(e) => handleChange('servicos', index, 'fornecedor', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => handleChange('servicos', index, 'valorUnitario', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.valorTotal}
                      onChange={(e) => handleChange('servicos', index, 'valorTotal', parseFloat(e.target.value))}
                      className="w-full border border-gray-300 rounded-md p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveRow('servicos', index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => handleAddRow('servicos')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar Linha
          </button>
        </div>

        {/* Botões de ação */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salvar e Avançar
          </button>
          <button
            type="button"
            onClick={() => console.log(formData)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Gerar PDF (Para fins de demonstração)
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demanda;
