// src/app/revisao/page.tsx
'use client';
import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import jsPDF from 'jspdf'; // Biblioteca para gerar PDF
import autoTable from 'jspdf-autotable'; // Plugin para gerar tabelas no PDF

const Revisao = () => {
  const [dadosFormData, setDadosFormData] = useState<any>(null);
  const [demandaFormData, setDemandaFormData] = useState<any>(null);
  const [filledDate, setFilledDate] = useState(new Date().toLocaleDateString());
  const [updatedDate, setUpdatedDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const dadosData = localStorage.getItem('dadosFormData');
    const demandaData = localStorage.getItem('demandaFormData');
    
    if (dadosData) setDadosFormData(JSON.parse(dadosData));
    if (demandaData) setDemandaFormData(JSON.parse(demandaData));
  }, []);

  const handleSave = () => {
    // Função para salvar dados (no frontend, pode ser um mock)
    alert('Dados salvos com sucesso!');
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Revisão de Dados do Evento', 14, 20);

    doc.text('Dados do Evento', 14, 30);
    autoTable(doc, {
      head: [['Campo', 'Valor']],
      body: Object.entries(dadosFormData || {}).map(([key, value]) => [key, value]),
      startY: 40,
    });

    doc.text('Demandas do Evento', 14, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
      head: [['Seção', 'Descrição', 'Fornecedor', 'Quantidade', 'Diária', 'Valor Unitário', 'Valor Total']],
      body: [
        ...((demandaFormData?.compraMaterial || []).map(item => ['Compra de Material', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
        ...((demandaFormData?.maoDeObra || []).map(item => ['Mão de Obra', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
        ...((demandaFormData?.terceiros || []).map(item => ['Contratação de Terceiros', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
        ...((demandaFormData?.equipamentos || []).map(item => ['Equipamentos de Sonorização, Audiovisual e Iluminação', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
        ...((demandaFormData?.cenografia || []).map(item => ['Cenografia', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
        ...((demandaFormData?.servicos || []).map(item => ['Serviços de Organização, Planejamento, Produção e Execução', item.descricao, item.fornecedor, item.qtde, item.diaria, item.valorUnitario, item.valorTotal])),
      ],
      startY: doc.lastAutoTable.finalY + 10,
    });

    doc.save('revisao-dados-evento.pdf');
  };

  return (
    <div className="container mx-auto p-8 h-screen flex flex-col">
      <ProgressBar />
      <h1 className="text-2xl font-bold mb-8">Revisão</h1>
      <div className="space-y-6 flex-grow">
        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="mb-4">
            <span className="font-medium">Preenchido:</span> {filledDate}
          </div>
          <div className="mb-4">
            <span className="font-medium">Atualizado:</span> {updatedDate}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
          <button
            onClick={generatePDF}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Gerar PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Revisao;
