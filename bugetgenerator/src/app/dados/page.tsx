'use client';
// src/app/dados/page.tsx

import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';

const Dados = () => {
  const [formData, setFormData] = useState({
    nomeProjeto: '',
    dataInicio: '',
    horaInicio: '',
    dataTermino: '',
    horaTermino: '',
    local: '',
    bairro: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
    valorOrcado: '',
  });

  const [cidades, setCidades] = useState<string[]>([]);
  const [estados, setEstados] = useState<string[]>([]);

  // Função para buscar os estados da API do IBGE
  const fetchEstados = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v2/malhas_estaduais');
      const data = await response.json();
      const estadosList = data.map((estado: any) => estado.sigla);
      setEstados(estadosList);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  // Função para buscar as cidades de um estado da API do IBGE
  const fetchCidades = async (estado: string) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/malhas_municipais/${estado}`);
      const data = await response.json();
      const cidadesList = data.map((cidade: any) => cidade.nome);
      setCidades(cidadesList);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  useEffect(() => {
    fetchEstados();
  }, []);

  // Atualiza o estado do formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Atualiza o estado das cidades quando o estado muda
  const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = e.target.value;
    setFormData(prev => ({ ...prev, estado }));
    fetchCidades(estado);
  };

  // Função para envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados, como enviar para um servidor ou armazenar localmente
    window.location.href = '/demanda'; // Redireciona para a página /demanda
  };

  return (
    <div className="container mx-auto p-8 h-screen flex flex-col">
      <ProgressBar />
      <h1 className="text-2xl font-bold mb-8">Dados do Evento</h1>
      <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomeProjeto" className="block text-sm font-medium text-gray-700">
            Nome do Projeto/Evento
          </label>
          <input
            type="text"
            id="nomeProjeto"
            name="nomeProjeto"
            value={formData.nomeProjeto}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="dataInicio" className="block text-sm font-medium text-gray-700">
              Data de Início
            </label>
            <input
              type="date"
              id="dataInicio"
              name="dataInicio"
              value={formData.dataInicio}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="horaInicio" className="block text-sm font-medium text-gray-700">
              Hora
            </label>
            <input
              type="time"
              id="horaInicio"
              name="horaInicio"
              value={formData.horaInicio}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="dataTermino" className="block text-sm font-medium text-gray-700">
              Data de Término
            </label>
            <input
              type="date"
              id="dataTermino"
              name="dataTermino"
              value={formData.dataTermino}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="horaTermino" className="block text-sm font-medium text-gray-700">
              Hora
            </label>
            <input
              type="time"
              id="horaTermino"
              name="horaTermino"
              value={formData.horaTermino}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="local" className="block text-sm font-medium text-gray-700">
            Local
          </label>
          <input
            type="text"
            id="local"
            name="local"
            value={formData.local}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
              Rua
            </label>
            <input
              type="text"
              id="rua"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
              Número
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <select
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              
            >
              <option value="">Selecione a cidade</option>
              {cidades.map((cidade, index) => (
                <option key={index} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={(e) => handleEstadoChange(e)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              
            >
              <option value="">Selecione o estado</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="valorOrcado" className="block text-sm font-medium text-gray-700">
            Valor Orçado
          </label>
          <input
            type="text"
            id="valorOrcado"
            name="valorOrcado"
            value={formData.valorOrcado}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Estimado - Orçado"
            required
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

export default Dados;
