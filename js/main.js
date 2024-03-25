"use strict";
function kelulusan(mahasiswa) {
    if (mahasiswa.nilai === 100 && mahasiswa.kehadiran >= 80) {
        return `${mahasiswa.name} Lulus Cum laude`;
    }
    else if (mahasiswa.nilai >= 70 && mahasiswa.kehadiran >= 70) {
        return `${mahasiswa.name} Lulus`;
    }
    else {
        return `${mahasiswa.name} Tidak Lulus`;
    }
}
const mahasiswa = [
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
];
// for(let i = 0; i < mahasiswa.length; i++) {
//     const result = kelulusan(mahasiswa[i])
//     console.log(result)
// }
mahasiswa.forEach((student) => {
    console.log(kelulusan(student));
});
