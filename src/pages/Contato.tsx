import Layout from '@/components/Layout';

export default function Contato() {
  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center bg-brand-gray-light">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Contato
          </h1>
          <p className="text-lg text-brand-gray-medium">
            Formulário de contato será adicionado em breve
          </p>
        </div>
      </div>
    </Layout>
  );
}
