// @flow strict
const steps = [
  {
    id: 1,
    title: "Konsultasi & Analisis",
    description:
      "Kami bahas kebutuhan bisnis Anda via WhatsApp atau meeting singkat. Tujuan, target, dan scope proyek dituangkan dalam proposal gratis.",
    duration: "1-2 hari",
  },
  {
    id: 2,
    title: "Requirement & Penawaran",
    description:
      "Dokumentasi kebutuhan, pilihan fitur, estimasi biaya, dan timeline jelas. Anda menyetujui dengan DP 50%.",
    duration: "2-3 hari",
  },
  {
    id: 3,
    title: "Pengembangan & Preview",
    description:
      "Pengembangan berjalan bertahap. Anda mendapat link preview untuk memantau progres dan memberi masukan setiap tahap.",
    duration: "1-8 minggu",
  },
  {
    id: 4,
    title: "Launch & Pelatihan",
    description:
      "Go-live, migrasi data, dan sesi pelatihan singkat agar tim Anda nyaman menggunakan sistem baru.",
    duration: "1-2 hari",
  },
  {
    id: 5,
    title: "Garansi & Maintenance",
    description:
      "Semua paket termasuk garansi dan dukungan. Opsional maintenance bulanan untuk monitoring, update, dan perbaikan bug.",
    duration: "Bulanan",
  },
];

function WorkProcess() {
  return (
    <div className="container-page relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Proses Kerja
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-[#25213b] bg-[#0d1224] p-5 lg:p-6 transition-colors hover:border-violet-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                  {String(step.id).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden lg:block w-6 h-[2px] bg-[#25213b]" />
                )}
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="text-xs text-[#16f2b3]">{step.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
