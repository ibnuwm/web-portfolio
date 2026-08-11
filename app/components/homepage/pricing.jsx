// @flow strict
import { pricingData } from "@/utils/data/pricing";
import { FaCheck, FaStar, FaTag } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function PricingSection() {
  const { packages, addOns, promo, currency, period } = pricingData;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getFeatureIcon = (included) => included ? (
    <FaCheck className="text-green-400" size={18} />
  ) : (
    <FaXmark className="text-red-400" size={18} />
  );

  return (
    <div id="pricing" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Paket Harga
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Promo Banner */}
      {promo.active && (
        <div className="container-page mb-12">
          <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 lg:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <FaTag className="text-white text-2xl" size={28} />
                <div>
                  <p className="text-white font-bold text-xl lg:text-2xl">{promo.label}</p>
                  <p className="text-amber-100 text-sm lg:text-base">{promo.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
                  Diskon {promo.discount}% Semua Paket
                </span>
                <span className="bg-white/10 px-3 py-2 rounded-full text-amber-200 text-sm">
                  Berlaku s/d {new Date(promo.validUntil).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="py-8">
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-base lg:text-lg px-4">
          Pilih paket yang sesuai kebutuhan bisnis Anda. Semua harga sudah termasuk PPN.
          <span className="text-violet-400 font-medium"> Konsultasi gratis </span> untuk menentukan paket terbaik.
        </p>

        <div className="container-page grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative group bg-gradient-to-br from-[#0d1224] to-[#1a1443] border rounded-2xl overflow-hidden transition-all duration-500 ${
                pkg.popular
                  ? 'border-violet-500/50 shadow-xl shadow-violet-500/10 ring-2 ring-violet-500/20'
                  : 'border-[#25213b] hover:border-violet-500/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Paling Populer
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{pkg.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-white">{formatPrice(pkg.price)}</span>
                    {pkg.originalPrice > pkg.price && (
                      <span className="text-gray-500 line-through text-lg ml-2">{formatPrice(pkg.originalPrice)}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">/{period}</p>
                </div>

                {/* Features Included */}
                <div className="mb-6">
                  <h4 className="text-green-400 text-sm font-semibold mb-4 flex items-center gap-2">
                    <FaCheck className="text-green-400" size={16} />
                    Termasuk
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <FaCheck className="text-green-400 mt-0.5 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Not Included */}
                {pkg.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-red-400 text-sm font-semibold mb-4 flex items-center gap-2">
                      <FaXmark className="text-red-400" size={16} />
                      Tidak Termasuk
                    </h4>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                          <FaXmark className="text-red-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href="#contact"
                  data-track="pricing_cta"
                  data-track-label={pkg.name}
                  className={`block w-full text-center py-3 md:py-4 rounded-full font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:from-violet-600 hover:to-pink-600 shadow-lg shadow-violet-500/30'
                      : `bg-gradient-to-r ${pkg.color} text-white hover:opacity-90 shadow-lg`
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="container-page mt-16">
          <div className="text-center mb-8">
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">Tambahan Layanan (Add-ons)</h4>
            <p className="text-gray-400">Dapat ditambahkan ke paket mana pun sesuai kebutuhan</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-5 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-white">{addon.name}</h5>
                  <span className="text-[#16f2b3] font-bold text-lg">{formatPrice(addon.price)}</span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Butuh solusi custom? <span className="text-violet-400 font-medium">Diskusikan kebutuhan spesifik Anda</span> dan kami buatkan proposal yang tepat.
          </p>
          <a
            href="#contact"
            data-track="pricing_cta"
            data-track-label="consultation"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wider hover:from-violet-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-violet-500/30"
          >
            Konsultasi Gratis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;