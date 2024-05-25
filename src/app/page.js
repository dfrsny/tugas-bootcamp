import { useRouter } from 'next/router';
import Button from '@/components/Button'; // Sesuaikan path dengan struktur direktori Anda

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    // Navigasi ke halaman tertentu saat tombol diklik
    router.push('src/app/todo/page.js'); // Sesuaikan dengan rute yang sesuai
  };

  return (
    <div>
      <h1>Next JS hadir di UTY</h1>
      {/* Tambahkan event onClick yang memanggil handleClick saat tombol diklik */}
      <Button title={"BTR"} onClick={handleClick} />
    </div>
  );
};

export default Home;
