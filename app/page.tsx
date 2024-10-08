
import dynamic from 'next/dynamic';

const AuthButtons = dynamic(() => import('@/components/auth-buttons'), { ssr: false });

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to Athlos</h1>
      <p className="text-xl mb-8">
        Join or create sports groups, rate players anonymously, and enjoy fair
        team divisions.
      </p>
      <div className="space-x-4">
        <AuthButtons />
      </div>
    </div>
  );
}
