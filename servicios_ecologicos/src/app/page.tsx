import Image from "next/image";

export default function Home() {
  return (
      <main className="flex justify-center items-center w-full h-screen bg-slate-100">
        <Image 
          src="/images/logo.jpeg" 
          alt="Imagen Servicios Ecológicos" 
          width={1000} 
          height={1000}
          className="rounded-lg border-2 border-gray-300 shadow-lg" 
        />
      </main>
  );
}
