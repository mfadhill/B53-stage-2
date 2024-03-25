interface Mahasiswa {
    name: string
    nilai: number
    kehadiran: number
}

function kelulusan(mahasiswa: Mahasiswa): string {
    if(mahasiswa.nilai === 100 && mahasiswa.kehadiran >= 80) {
        return `${mahasiswa.name} Lulus Cum laude`
    }else if(mahasiswa.nilai >= 70 && mahasiswa.kehadiran >=70) {
        return `${mahasiswa.name} Lulus`
    }else {
        return `${mahasiswa.name} Tidak Lulus`
    }
}

const mahasiswa: Mahasiswa[] = [
    {
        name: "Jhon",
        nilai: 80,
        kehadiran: 90
    },
    {
        name: "Jane",
        nilai: 60,
        kehadiran: 65
    },
    {
        name: "Alice",
        nilai: 100,
        kehadiran: 85
    }
]

mahasiswa.forEach((mahasiswa) => {
    console.log(kelulusan(mahasiswa));
  });