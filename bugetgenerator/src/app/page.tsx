'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/solicitante');
  }, [router]);

  return <div>Carregando...</div>;
};

export default Index;
